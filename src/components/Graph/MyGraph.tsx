import { InfoCircledIcon, ZoomInIcon, ZoomOutIcon } from "@radix-ui/react-icons"
import { Box, Button, Flex, Grid, IconButton, Text, Tooltip } from "@radix-ui/themes"
import { ElementRef, WheelEventHandler, useCallback, useEffect, useRef } from "react"
import { Colors } from "../../utils/colors"

interface Props {
  layers: number[]
}

type Position = { x: number; y: number }
type Line = { from: Position; to: Position }

const canvasWidth = 1000
const canvasHeight = 800
let canvasCenter: Position = { x: canvasWidth * 0.5, y: canvasHeight * 0.5 }
let circleSize = 50
let distance = 200
const originalCanvasCenter = { ...canvasCenter }
const originalCircleSize = circleSize
const originalDistance = distance
let prevClientX: number | null = null
let prevClientY: number | null = null

export function MyGraph({ layers }: Props) {
  const canvasRef = useRef<ElementRef<"canvas">>(null)

  const getPositions = useCallback(() => {
    const numLayers = layers.length
    const circlePositions: Position[] = []
    const linePositions: Line[] = []

    for (let layer = 0; layer < numLayers; layer++) {
      const nodes = layers[layer]
      for (let node = 0; node < nodes; node++) {
        const nodePosition = getNodePosition(node, layer, nodes, numLayers)
        circlePositions.push(nodePosition)

        const nextLayer = layer + 1
        const nextLayerNodes = layers[nextLayer]
        if (nextLayerNodes) {
          for (let nextLayerNode = 0; nextLayerNode < nextLayerNodes; nextLayerNode++) {
            const otherNodePosition = getNodePosition(nextLayerNode, nextLayer, nextLayerNodes, numLayers)
            linePositions.push({ from: nodePosition, to: otherNodePosition })
          }
        }
      }
    }

    return { circlePositions, linePositions }
  }, [layers])

  const drawNeuralNetwork = useCallback(
    (context: CanvasRenderingContext2D) => {
      const { circlePositions, linePositions } = getPositions()

      context.clearRect(0, 0, canvasWidth, canvasHeight)

      for (const linePosition of linePositions) {
        drawLine(linePosition.from, linePosition.to, context)
      }

      for (const circlePosition of circlePositions) {
        drawCircle(circlePosition, context)
      }
    },
    [getPositions]
  )

  const zoomIn = () => {
    const context = canvasRef.current?.getContext("2d")
    if (!context) return
    circleSize *= 1.15
    distance *= 1.15
    drawNeuralNetwork(context)
  }

  const zoomOut = () => {
    const context = canvasRef.current?.getContext("2d")
    if (!context) return
    circleSize *= 0.85
    distance *= 0.85
    drawNeuralNetwork(context)
  }

  const zoomEventListener: WheelEventHandler<HTMLCanvasElement> = (e) => {
    if (e.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }

  const panCamera = (e: MouseEvent) => {
    if (!prevClientX || !prevClientY) {
      prevClientX = e.clientX
      prevClientY = e.clientY
    }

    const deltaX = e.clientX - prevClientX
    const deltaY = e.clientY - prevClientY
    canvasCenter.x += deltaX
    canvasCenter.y += deltaY
    const context = canvasRef.current?.getContext("2d")
    if (!context) return
    drawNeuralNetwork(context)
    prevClientX = e.clientX
    prevClientY = e.clientY
  }

  const resetCenter = () => {
    const context = canvasRef.current?.getContext("2d")
    if (!context) return

    canvasCenter = { ...originalCanvasCenter }
    drawNeuralNetwork(context)
  }

  const resetZoom = () => {
    const context = canvasRef.current?.getContext("2d")
    if (!context) return

    circleSize = originalCircleSize
    distance = originalDistance
    drawNeuralNetwork(context)
  }

  useEffect(() => {
    if (!canvasRef.current) return
    const context = canvasRef.current.getContext("2d")!
    drawNeuralNetwork(context)
  }, [layers, drawNeuralNetwork])

  return (
    <Box position="relative">
      <canvas
        onWheel={zoomEventListener}
        onMouseDown={() => {
          prevClientX = null
          prevClientY = null
          window.addEventListener("mousemove", panCamera)
          const mouseUpListener = () => {
            window.removeEventListener("mousemove", panCamera)
            window.removeEventListener("mouseup", mouseUpListener)
          }
          window.addEventListener("mouseup", mouseUpListener)
        }}
        style={{ background: Colors.background, cursor: "grab" }}
        width={canvasWidth}
        height={canvasHeight}
        ref={canvasRef}
      />
      <Flex direction="column" gapY="2" position="absolute" top="4" right="4">
        <Button onClick={resetCenter} variant="outline">
          Center Camera
        </Button>
        <Button onClick={resetZoom} variant="outline">
          Reset Zoom
        </Button>
        <Grid columns="4" gapX="1" align="center">
          <IconButton onClick={zoomIn} variant="outline">
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={zoomOut} variant="outline">
            <ZoomOutIcon />
          </IconButton>

          <Tooltip
            content={
              <Flex direction="column">
                <Text>Use mouse wheel to zoom in/out</Text>
                <Text>Hold down left mouse button to pan around</Text>
              </Flex>
            }
          >
            <IconButton style={{ gridColumn: "span 2", justifySelf: "center" }} variant="ghost" radius="full">
              <InfoCircledIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Flex>
    </Box>
  )
}

function drawCircle(position: Position, context: CanvasRenderingContext2D) {
  context.fillStyle = Colors.background
  context.strokeStyle = Colors.indigo
  context.lineWidth = 5
  context.beginPath()
  context.arc(position.x, position.y, circleSize, 0, 2 * Math.PI)
  context.stroke()
  context.fill()
}

function drawLine(fromPosition: Position, toPosition: Position, context: CanvasRenderingContext2D) {
  context.fillStyle = Colors.edge
  context.strokeStyle = Colors.edge
  context.lineWidth = 4
  context.beginPath()
  context.moveTo(fromPosition.x, fromPosition.y)
  context.lineTo(toPosition.x, toPosition.y)
  context.stroke()
}

function getNodePosition(node: number, layer: number, numNodes: number, numLayers: number) {
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
}
