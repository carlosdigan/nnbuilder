import { ActionIcon, Flex, Text } from "@mantine/core"
import { IconChevronDown, IconChevronUp, IconTrash } from "@tabler/icons-react"
import { memo } from "react"
import { Layer } from "../../types/types"
import { useUpdateLayers } from "../../hooks/useUpdateLayers"

interface Props {
  layer: Layer
}

export const LayerNodes = memo(function LayerNodes({ layer }: Props) {
  const { addNode, removeNode, removeLayer } = useUpdateLayers()

  return (
    <Flex align="center">
      <Text fw="bold" w={30} mr={8} ta="right">
        {layer.nodes.length}
      </Text>

      <Flex direction="column">
        <ActionIcon onClick={() => addNode(layer)} variant="subtle" size={20}>
          <IconChevronUp />
        </ActionIcon>
        <ActionIcon onClick={() => removeNode(layer)} variant="subtle" size={20}>
          <IconChevronDown />
        </ActionIcon>
      </Flex>

      <ActionIcon ml="sm" variant="subtle" color="red" radius="xl" onClick={() => removeLayer(layer)}>
        <IconTrash size={20} color="red" />
      </ActionIcon>
    </Flex>
  )
}, arePropsEqual)

function arePropsEqual(oldProps: Props, newProps: Props) {
    return oldProps.layer.nodes.length === newProps.layer.nodes.length
}
