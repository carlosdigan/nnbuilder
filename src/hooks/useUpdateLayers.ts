import { atom, useAtom } from "jotai"
import { v4 } from "uuid"
import { Layer, Layers } from "../types/types"

export const layersAtom = atom<Layers>([])

export function useUpdateLayers() {
  const [layers, setLayers] = useAtom(layersAtom)

  const addNode = (layer: Layer) => {
    const newNodeId = v4()
    const newLayer = { ...layer, nodes: [...layer.nodes, newNodeId] }

    const newLayers = [...layers]
    const layerIndex = layers.findIndex(
      (otherLayer) => otherLayer.id === layer.id
    )
    newLayers[layerIndex] = newLayer
    setLayers(newLayers)
  }

  const removeNode = (layer: Layer) => {
    const layerIndex = layers.findIndex(
      (otherLayer) => otherLayer.id === layer.id
    )
    const newLayer = {
      ...layer,
      nodes: layer.nodes.slice(0, layer.nodes.length - 1),
    }
    const newLayers = [...layers]
    if (newLayer.nodes.length) {
      newLayers[layerIndex] = newLayer
    } else {
      newLayers.splice(layerIndex, 1)
    }
    setLayers(newLayers)
  }

  const addLayer = () => {
    const newGraphNodeId = v4()
    const newLayers: Layer[] = [
      ...layers,
      { id: v4(), activationFunction: "linear", nodes: [newGraphNodeId] },
    ]
    setLayers(newLayers)
  }

  const removeLayer = (layer: Layer) => {
    const removeLayerIndex = layers.findIndex(
      (otherLayer) => otherLayer.id === layer.id
    )
    const newLayers = [...layers]
    newLayers.splice(removeLayerIndex, 1)
    setLayers(newLayers)
  }

  return {
    addLayer,
    removeLayer,
    addNode,
    removeNode,
  }
}
