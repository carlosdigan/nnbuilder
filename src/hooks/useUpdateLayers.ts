import { atom, useSetAtom } from "jotai"
import { v4 } from "uuid"
import { Layer, Layers } from "../types/types"

export const layersAtom = atom<Layers>([])

export function useUpdateLayers() {
  const setLayers = useSetAtom(layersAtom)

  const addNode = (layer: Layer) => {
    setLayers((layers) => {
      const newLayer = { ...layer, nodes: layer.nodes + 1 }

      const newLayers = [...layers]
      const layerIndex = layers.findIndex((otherLayer) => otherLayer.id === layer.id)
      newLayers[layerIndex] = newLayer
      return newLayers
    })
  }

  const removeNode = (layer: Layer) => {
    setLayers((layers) => {
      const layerIndex = layers.findIndex((otherLayer) => otherLayer.id === layer.id)
      const newLayer = {
        ...layer,
        nodes: layer.nodes - 1,
      }
      const newLayers = [...layers]
      if (newLayer.nodes) {
        newLayers[layerIndex] = newLayer
      } else {
        newLayers.splice(layerIndex, 1)
      }
      return newLayers
    })
  }

  const addLayer = () => {
    setLayers((layers) => {
      const newLayers: Layer[] = [...layers, { id: v4(), activationFunction: "linear", nodes: 1 }]
      return newLayers
    })
  }

  const removeLayer = (layer: Layer) => {
    setLayers((layers) => {
      const removeLayerIndex = layers.findIndex((otherLayer) => otherLayer.id === layer.id)
      const newLayers = [...layers]
      newLayers.splice(removeLayerIndex, 1)
      return newLayers
    })
  }

  return {
    addLayer,
    removeLayer,
    addNode,
    removeNode,
  }
}
