import { Box } from "@radix-ui/themes"
import { useAtomValue } from "jotai"
import {
  GraphCanvas,
  InternalGraphPosition,
  NodePositionArgs,
  Theme,
  darkTheme,
} from "reagraph"
import { useGraphData } from "../../hooks/useGraphData"
import { layersAtom } from "../../hooks/useUpdateLayers"
import { Colors } from "../../utils/colors"

const graphTheme: Theme = {
  ...darkTheme,
  node: {
    ...darkTheme.node,
    fill: Colors.indigo,
    activeFill: Colors.indigo,
  },
  canvas: {
    background: Colors.background,
  },
  edge: {
    ...darkTheme.edge,
    activeFill: Colors.indigo,
  },
}

export function Graph() {
  const layers = useAtomValue(layersAtom)
  const { graphNodes, graphEdges } = useGraphData()
  console.log(graphEdges)
  return (
    <Box
      style={{
        position: "relative",
        width: "80%",
        height: "100%",
      }}
    >
      <GraphCanvas
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
            middleNodeIndex =
              numNodesInLayer % 2 === 0
                ? (numNodesInLayer + 1) / 2 - 1
                : (numNodesInLayer - 1) / 2
            middleLayerIndex =
              layers.length % 2 === 0
                ? (layers.length + 1) / 2 - 1
                : (layers.length - 1) / 2

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
    </Box>
  )
}
