import { Flex } from "@mantine/core"
import { memo, useRef } from "react"
import type { Layer as LayerType } from "../../types/types"
import { LayerActivationFunction } from "./LayerActivationFunction"
import { LayerBadge } from "./LayerBadge"
import { LayerNodes } from "./LayerNodes"

type Props = {
  layer: LayerType
  layerIndex: number
}

export const Layer = memo(function Layer({ layer, layerIndex }: Props) {
  const layersRef = useRef<HTMLDivElement>(null)

  return (
    <Flex ref={layersRef} align="center" pos="relative">
      <LayerBadge layerIndex={layerIndex} />
      <Flex columnGap={28}>
        <LayerActivationFunction layer={layer} />
        <LayerNodes layer={layer} />
      </Flex>
    </Flex>
  )
}, arePropsEqual)

function arePropsEqual(oldProps: Props, newProps: Props) {
  return (
    oldProps.layerIndex === newProps.layerIndex &&
    oldProps.layer.activationFunction === newProps.layer.activationFunction &&
    oldProps.layer.id === newProps.layer.id &&
    oldProps.layer.nodes.length === newProps.layer.nodes.length
  )
}
