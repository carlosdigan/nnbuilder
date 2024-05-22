import { Badge, Box } from "@mantine/core"
import { memo } from "react"

interface Props {
  layerIndex: number
}

export const LayerBadge = memo(function LayerBadge({ layerIndex }: Props) {
  return (
    <Box w={100}>
      <Badge radius="sm" variant="light" w="fit-content">
        Layer {layerIndex + 1}
      </Badge>
    </Box>
  )
}, arePropsEqual)

function arePropsEqual(oldProps: Props, newProps: Props) {
  return oldProps.layerIndex === newProps.layerIndex
}
