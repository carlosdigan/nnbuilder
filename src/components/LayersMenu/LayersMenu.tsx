import { ActionIcon, Flex, SimpleGrid } from "@mantine/core"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useAtomValue } from "jotai"
import { useState } from "react"
import { layersAtom, useUpdateLayers } from "../../hooks/useUpdateLayers"
import { GenerateCode } from "../GenerateCode/GenerateCode"
import { HyperParameters } from "../HyperParameters/HyperParameters"
import { Layers } from "../Layers/Layers"
import { SearchBar } from "../SearchBar/SearchBar"

export function LayersMenu() {
  const { addLayer, removeLayer } = useUpdateLayers()
  const layers = useAtomValue(layersAtom)
  const lastLayer = layers.at(-1)
  const [search, setSearch] = useState("")

  return (
    <Flex direction="column" rowGap={10} miw="350px" h="100%">
      <SearchBar setSearch={setSearch} />
      <Layers search={search} />
      <SimpleGrid cols={3} style={{ alignItems: "center" }}>
        <Flex columnGap={5}>
          <GenerateCode numLayers={layers.length} />
          <HyperParameters />
        </Flex>
        <Flex columnGap={5}>
          <ActionIcon size="lg" onClick={addLayer} variant="outline">
            <IconPlus />
          </ActionIcon>
          <ActionIcon
            size="lg"
            disabled={lastLayer === undefined}
            onClick={() => removeLayer(lastLayer!)}
            variant="outline"
          >
            <IconMinus />
          </ActionIcon>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}
