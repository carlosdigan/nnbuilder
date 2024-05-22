import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Flex, ScrollArea } from "@mantine/core"
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

  const [animationParent] = useAutoAnimate({ duration: 100 })

  return (
    <ScrollArea
      type="auto"
      scrollbars="y"
      scrollbarSize={6}
      h="100%"
      styles={{
        scrollbar: {
          background: "rgba(221, 234, 248, 0.08)",
          borderRadius: 12,
          padding: 0,
        },
        thumb: {
          background: "rgba(217, 237, 255, 0.365)",
        },
      }}
    >
      <Flex rowGap={20} direction="column" ref={animationParent}>
        {filteredLayers.map((layer, layerIndex) => (
          <Layer key={layer.id} layer={layer} layerIndex={layerIndex} />
        ))}
      </Flex>
    </ScrollArea>
  )
}
