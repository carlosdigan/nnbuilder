import { Select } from "@radix-ui/themes"
import { useAtom } from "jotai"
import { layersAtom } from "../../hooks/useUpdateLayers"
import { ActivationFunction, Layer } from "../../types/types"
import { activationFunctions } from "../../utils/constants"

type Props = {
  layer: Layer
}

export function ActivationFunctions({ layer }: Props) {
  const [layers, setLayers] = useAtom(layersAtom)
  return (
    <Select.Root
      defaultValue="linear"
      onValueChange={(newActivationFunction: ActivationFunction) => {
        const layerIndex = layers.findIndex(
          (otherLayer) => otherLayer.id === layer.id
        )
        const newLayer: Layer = {
          ...layer,
          activationFunction: newActivationFunction,
        }
        const newLayers = [...layers]
        newLayers[layerIndex] = newLayer
        setLayers(newLayers)
      }}
    >
      <Select.Trigger variant="surface" style={{ width: 115 }} />
      <Select.Content>
        <Select.Group>
          <Select.Label>Activation Function</Select.Label>
          {activationFunctions.map((activationFunction) => (
            <Select.Item key={activationFunction} value={activationFunction}>
              {activationFunction}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
