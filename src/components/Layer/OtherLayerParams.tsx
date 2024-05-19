import { ActionIcon, Flex, Text } from "@mantine/core"
import { memo } from "react"
import { useUpdateLayers } from "../../hooks/useUpdateLayers"
import { Layer } from "../../types/types"
import { ActivationFunctions } from "../ActivationFunctions/ActivationFunction"
import { IconChevronDown, IconChevronUp, IconTrash } from "@tabler/icons-react"

type Props = {
  layer: Layer
}

export const OtherLayerParams = memo(function OtherLayerParams({ layer }: Props) {
  const { addNode, removeNode, removeLayer } = useUpdateLayers()
    
  return (
    <Flex columnGap={28}>
      <ActivationFunctions layer={layer} />
      <Flex align="center">
        <Text fw="bold" w={30} mr={8} ta="right">
          {layer.nodes}
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
    </Flex>
  )
}, arePropsEqual)

function arePropsEqual(oldProps: Props, newProps: Props) {
  return (
    oldProps.layer.id === newProps.layer.id &&
    oldProps.layer.activationFunction === newProps.layer.activationFunction &&
    oldProps.layer.nodes === newProps.layer.nodes
  )
}
