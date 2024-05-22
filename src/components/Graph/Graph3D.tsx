import { ActionIcon, Button, Flex, Text, Tooltip } from "@mantine/core"
import { IconInfoCircle, IconZoomIn, IconZoomOut } from "@tabler/icons-react"
import { useAtomValue } from "jotai"
import { useRef } from "react"
import { GraphCanvas, GraphCanvasRef, InternalGraphPosition, NodePositionArgs, Theme, darkTheme } from "reagraph"
import { useGraph3D } from "../../hooks/useGraph3D"
import { layersAtom } from "../../hooks/useUpdateLayers"
import { Colors } from "../../utils/colors"

const graphTheme: Theme = {
  ...darkTheme,
  canvas: {
    background: Colors.background,
  },
  node: {
    ...darkTheme.node,
    fill: Colors.indigo,
    activeFill: Colors.indigo,
  },
  edge: {
    ...darkTheme.edge,
    activeFill: Colors.indigo,
  },
}

export function Graph3D() {
  const layers = useAtomValue(layersAtom)
  const { graphNodes, graphEdges } = useGraph3D()
  const graphRef = useRef<GraphCanvasRef | null>(null)

  const resetCamera = () => {
    graphRef.current?.resetControls(true)
  }

  const zoomIn = () => {
    graphRef.current?.zoomIn()
  }

  const zoomOut = () => {
    graphRef.current?.zoomOut()
  }

  return (
    <>
      <GraphCanvas
        ref={graphRef}
        minDistance={0}
        maxDistance={Infinity}
        cameraMode="pan"
        layoutType="treeLr2d"
        edgeArrowPosition="none"
        theme={graphTheme}
        nodes={graphNodes}
        edges={graphEdges}
        layoutOverrides={{
          getNodePosition: (id: string, { nodes }: NodePositionArgs) => {
            const node = nodes.find((n) => n.id === id)!

            const { layerIndex, nodeIndexInLayer } = node.data

            let middleNodeIndex = 0
            let middleLayerIndex = 0

            const numNodesInLayer = layers[layerIndex].nodes.length
            middleNodeIndex = numNodesInLayer % 2 === 0 ? (numNodesInLayer + 1) / 2 - 1 : (numNodesInLayer - 1) / 2
            middleLayerIndex = layers.length % 2 === 0 ? (layers.length + 1) / 2 - 1 : (layers.length - 1) / 2

            const XdistanceFromMiddle = layerIndex - middleLayerIndex
            const YdistanceFromMiddle = nodeIndexInLayer - middleNodeIndex

            const distance = 35

            return {
              x: distance * XdistanceFromMiddle,
              y: distance * YdistanceFromMiddle,
              z: 1,
            } as InternalGraphPosition
          },
        }}
      />
      <Flex direction="column" rowGap={8} pos="absolute" top={20} right={20}>
        <Button onClick={resetCamera} variant="outline">
          Reset Camera
        </Button>
        <Flex justify="space-between">
          <Flex gap="xs" w="100%" justify="center">
            <ActionIcon onClick={zoomIn} variant="subtle">
              <IconZoomIn />
            </ActionIcon>
            <ActionIcon onClick={zoomOut} variant="subtle">
              <IconZoomOut />
            </ActionIcon>
            <Tooltip
              withArrow
              label={
                <Flex direction="column">
                  <Text>Use mouse wheel to zoom in/out</Text>
                  <Text>Hold down a mouse button to pan around</Text>
                  <Text>Hold space whilst holding down left mouse button to orbit around</Text>
                </Flex>
              }
            >
              <ActionIcon style={{ gridColumn: "span 2" }} variant="subtle" radius="full">
                <IconInfoCircle />
              </ActionIcon>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
