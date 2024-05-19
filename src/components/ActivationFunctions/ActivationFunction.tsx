import { Combobox, Input, InputBase, useCombobox } from "@mantine/core"
import { useSetAtom } from "jotai"
import { useState } from "react"
import { layersAtom } from "../../hooks/useUpdateLayers"
import { ActivationFunction, Layer } from "../../types/types"
import { activationFunctions } from "../../utils/constants"

type Props = {
  layer: Layer
}

export function ActivationFunctions({ layer }: Props) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const [activationFunction, setActivationFunction] = useState<ActivationFunction>(activationFunctions[0])
  const setLayers = useSetAtom(layersAtom)

  const options = activationFunctions.map((activationFunction) => (
    <Combobox.Option value={activationFunction} key={activationFunction}>
      {activationFunction}
    </Combobox.Option>
  ))

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(newActivationFunction: string) => {
        setActivationFunction(newActivationFunction as ActivationFunction)
        setLayers((layers) => {
          const layerIndex = layers.findIndex((otherLayer) => otherLayer.id === layer.id)
          const newLayer: Layer = {
            ...layer,
            activationFunction: newActivationFunction as ActivationFunction,
          }
          const newLayers = [...layers]
          newLayers[layerIndex] = newLayer
          return newLayers
        })
        combobox.closeDropdown()
      }}
      keepMounted={false}
    >
      <Combobox.Target>
        <InputBase
          w="115px"
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {activationFunction || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}
