import { useAtomValue } from "jotai"
import { ElementRef, RefObject, useCallback, useLayoutEffect, useState } from "react"
import { Colors } from "../utils/colors"
import { layersAtom } from "./useUpdateLayers"

type Position = { x: number; y: number }
type Line = { from: Position; to: Position }

const defaultCircleSize = 50
const defaultDistance = 200

type Props = {
  canvasRef: RefObject<ElementRef<"canvas">>
  canvasDimensions: { width: number; height: number }
}

export function useGraph({ canvasRef, canvasDimensions }: Props) {
  const layers = useAtomValue(layersAtom)
  const [canvasCenter, setCanvasCenter] = useState<Position>({ x: 0, y: 0 })
  const [circleSize, setCircleSize] = useState(defaultCircleSize)
  const [distance, setDistance] = useState(defaultDistance)

  const getCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) throw new Error("Cannot get canvas element")

    return canvas
  }, [canvasRef])

  const getContext = useCallback(() => {
    const canvas = getCanvas()
    const context = canvas.getContext("2d")
    if (!context) throw new Error("Cannot get context")

    return context
  }, [getCanvas])

  const drawCircle = useCallback(
    (position: Position) => {
      const context = getContext()
      context.fillStyle = Colors.background
      context.strokeStyle = Colors.indigo
      context.lineWidth = 5
      context.beginPath()
      context.arc(position.x, position.y, circleSize, 0, 2 * Math.PI)
      context.stroke()
      context.fill()
    },
    [getContext, circleSize]
  )

  const drawLine = useCallback(
    (fromPosition: Position, toPosition: Position) => {
      const context = getContext()
      context.fillStyle = Colors.edge
      context.strokeStyle = Colors.edge
      context.lineWidth = 4
      context.beginPath()
      context.moveTo(fromPosition.x, fromPosition.y)
      context.lineTo(toPosition.x, toPosition.y)
      context.stroke()
    },
    [getContext]
  )

  const getNodePosition = useCallback(
    (node: number, layer: number, numNodes: number, numLayers: number) => {
      let middleNodeIndex = 0
      let middleLayerIndex = 0

      middleNodeIndex = numNodes % 2 === 0 ? (numNodes + 1) / 2 - 1 : (numNodes - 1) / 2
      middleLayerIndex = numLayers % 2 === 0 ? (numLayers + 1) / 2 - 1 : (numLayers - 1) / 2

      const XdistanceFromMiddle = layer - middleLayerIndex
      const YdistanceFromMiddle = node - middleNodeIndex

      return {
        x: distance * XdistanceFromMiddle + canvasCenter.x,
        y: distance * YdistanceFromMiddle + canvasCenter.y,
      }
    },
    [canvasCenter.x, canvasCenter.y, distance]
  )

  const getPositions = useCallback(() => {
    const numLayers = layers.length
    const circlePositions: Position[] = []
    const linePositions: Line[] = []

    for (let layer = 0; layer < numLayers; layer++) {
      const nodes = layers[layer].nodes
      for (let node = 0; node < nodes; node++) {
        const nodePosition = getNodePosition(node, layer, nodes, numLayers)
        circlePositions.push(nodePosition)

        const nextLayer = layer + 1
        const nextLayerNodes = layers[nextLayer]?.nodes
        if (nextLayerNodes) {
          for (let nextLayerNode = 0; nextLayerNode < nextLayerNodes; nextLayerNode++) {
            const otherNodePosition = getNodePosition(nextLayerNode, nextLayer, nextLayerNodes, numLayers)
            linePositions.push({ from: nodePosition, to: otherNodePosition })
          }
        }
      }
    }

    return { circlePositions, linePositions }
  }, [layers, getNodePosition])

  const drawNeuralNetwork = useCallback(() => {
    const { circlePositions, linePositions } = getPositions()
    const context = getContext()

    context.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height)

    for (const linePosition of linePositions) {
      drawLine(linePosition.from, linePosition.to)
    }

    for (const circlePosition of circlePositions) {
      drawCircle(circlePosition)
    }
  }, [getPositions, getContext, drawCircle, drawLine, canvasDimensions.width, canvasDimensions.height])

  const zoomIn = () => {
    setCircleSize(circleSize * 1.15)
    setDistance(distance * 1.15)
    drawNeuralNetwork()
  }

  const zoomOut = () => {
    setCircleSize(circleSize * 0.85)
    setDistance(distance * 0.85)
    drawNeuralNetwork()
  }

  const panCamera = (e: MouseEvent, prevClient: { x: number; y: number }) => {
    const deltaX = e.clientX - prevClient.x
    const deltaY = e.clientY - prevClient.y
    setCanvasCenter((canvasCenter) => ({ x: canvasCenter.x + deltaX, y: canvasCenter.y + deltaY }))
  }

  const centerCamera = () => {
    setCanvasCenter({ x: canvasDimensions.width * 0.5, y: canvasDimensions.height * 0.5 })
  }

  const resetZoom = () => {
    setCircleSize(defaultCircleSize)
    setDistance(defaultDistance)
  }

  const refreshCanvas = () => {
    drawNeuralNetwork()
  }

  useLayoutEffect(() => {
    drawNeuralNetwork()
  }, [layers, drawNeuralNetwork, canvasCenter, circleSize, distance])

  useLayoutEffect(() => {
    setCanvasCenter({ x: canvasDimensions.width * 0.5, y: canvasDimensions.height * 0.5 })
  }, [canvasDimensions.width, canvasDimensions.height])

  return { centerCamera, resetZoom, panCamera, canvasRef, zoomIn, zoomOut, refreshCanvas }
}
