import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import { Badge, Box, Flex, IconButton, Text } from "@radix-ui/themes"
import { useAtomValue } from "jotai"
import { layersAtom, useUpdateLayers } from "../../hooks/useUpdateLayers"
import type { Layer } from "../../types/types"
import { ActivationFunctions } from "../ActivationFunctions/ActivationFunction"

type Props = {
  layer: Layer
}

export function Layer({ layer }: Props) {
  const { addNode, removeNode } = useUpdateLayers()
  const layers = useAtomValue(layersAtom)

  const layerIndex = layers.findIndex(
    (otherLayer) => otherLayer.id === layer.id
  )

  return (
    <Flex>
      <Box width="100px">
        <Badge style={{ width: "fit-content" }}>Layer {layerIndex + 1}</Badge>
      </Box>
      <Flex gapX="6">
        <ActivationFunctions layer={layer} />
        <Flex align="center">
          <Text weight="bold" align="right" mr="2" style={{ width: "20px" }}>
            {layer.nodes.length}
          </Text>

          <Flex direction="column">
            <IconButton onClick={() => addNode(layer)} variant="ghost" size="1">
              <ChevronUpIcon />
            </IconButton>
            <IconButton
              onClick={() => removeNode(layer)}
              variant="ghost"
              size="1"
            >
              <ChevronDownIcon />
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
