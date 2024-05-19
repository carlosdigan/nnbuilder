import { Badge, Box, Flex } from "@mantine/core"
import { useRef } from "react"
import type { Layer as LayerType } from "../../types/types"
import { OtherLayerParams } from "./OtherLayerParams"

type Props = {
  layer: LayerType
  layerIndex: number
}

export function Layer({ layer, layerIndex }: Props) {
  const layersRef = useRef<HTMLDivElement>(null)

  return (
    <Flex ref={layersRef} align="center" pos="relative">
      <Box w={100}>
        <Badge radius="sm" variant="light" w="fit-content">
          Layer {layerIndex + 1}
        </Badge>
      </Box>
      <OtherLayerParams layer={layer} />
    </Flex>
  )
}
