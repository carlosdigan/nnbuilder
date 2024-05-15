import { Flex, ScrollArea } from "@radix-ui/themes"
import { useAtomValue } from "jotai"
import { useMemo } from "react"
import { layersAtom } from "../../hooks/useUpdateLayers"
import { Layer } from "../Layer/Layer"

type Props = {
  search: string
}

function parseLayerNumber(search: string): number | null {
  let layerNumber = 0
  for (const char of search) {
    const value = parseInt(char)
    if (typeof value === "number" && !isNaN(value)) {
      layerNumber = layerNumber * 10 + value
    } else if (layerNumber) {
      return layerNumber
    }
  }

  if (layerNumber) return layerNumber
  return null
}

export const scrollBarPadding = 10

export function Layers({ search }: Props) {
  const layers = useAtomValue(layersAtom)
  const filteredLayers = useMemo(() => {
    const searchLayerNumber = parseLayerNumber(search)

    if (!searchLayerNumber) {
      return layers
    }

    const searchLayerIndex = searchLayerNumber - 1
    const searchLayer = layers.at(searchLayerIndex)
    if (searchLayer) return [searchLayer]
    return []
  }, [layers, search])

  return (
    <ScrollArea
      type="auto"
      scrollbars="vertical"
      style={{ paddingRight: scrollBarPadding }}
    >
      <Flex gapY="4"pb="4" direction="column">
        {filteredLayers.map((layer) => (
          <Layer key={layer.id} layer={layer} />
        ))}
      </Flex>
    </ScrollArea>
  )
}
