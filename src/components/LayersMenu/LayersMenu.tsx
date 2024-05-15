import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Button, Flex, Grid } from "@radix-ui/themes"
import { useAtomValue } from "jotai"
import { useState } from "react"
import { layersAtom, useUpdateLayers } from "../../hooks/useUpdateLayers"
import { GenerateCode } from "../GenerateCode/GenerateCode"
import { HyperParameters } from "../HyperParameters/HyperParameters"
import { Layers, scrollBarPadding } from "../Layers/Layers"
import { SearchBar } from "../SearchBar/SearchBar"

export function LayersMenu() {
  const { addLayer, removeLayer } = useUpdateLayers()
  const layers = useAtomValue(layersAtom)
  const lastLayer = layers.at(-1)
  const [search, setSearch] = useState("")

  return (
    <Flex
      direction="column"
      gapY="2"
      width={`${290 + scrollBarPadding}px`}
      height="100%"
    >
      <SearchBar setSearch={setSearch} />
      <Layers search={search} />
      <Grid columns="3" align="center">
        <Flex gapX="2">
          <GenerateCode numLayers={layers.length} />
          <HyperParameters />
        </Flex>
        <Flex gapX="2">
          <Button onClick={addLayer} variant="outline">
            <PlusIcon />
          </Button>
          {lastLayer === undefined ? (
            <Button disabled={true} variant="outline">
              <MinusIcon />
            </Button>
          ) : (
            <Button onClick={() => removeLayer(lastLayer)} variant="outline">
              <MinusIcon />
            </Button>
          )}
        </Flex>
      </Grid>
    </Flex>
  )
}
