import { useAtomValue } from "jotai"
import { layersAtom } from "./useUpdateLayers"
import { useMemo } from "react"
import { GraphEdge, GraphNode } from "reagraph"

export function useGraph3D() {
  const layers = useAtomValue(layersAtom)
  const graphNodes = useMemo(() => {
    const nodes: GraphNode[] = []
    for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
      const layer = layers[layerIndex]
      layer.nodes.forEach((nodeId, nodeIndexInLayer) =>
        nodes.push({ id: nodeId, data: { nodeIndexInLayer, layerIndex } })
      )
    }

    return nodes
  }, [layers])

  const graphEdges = useMemo(() => {
    const edges: GraphEdge[] = []

    for (let index = 0; index < layers.length - 1; index++) {
      const currLayer = layers[index]
      const nextLayer = layers[index + 1]

      for (const currLayerNodeId of currLayer.nodes) {
        for (const nextLayerNodeId of nextLayer.nodes) {
          edges.push({
            id: `${currLayerNodeId}->${nextLayerNodeId}`,
            source: currLayerNodeId,
            target: nextLayerNodeId,
          })
        }
      }
    }

    return edges
  }, [layers])

  return { graphNodes, graphEdges }
}
