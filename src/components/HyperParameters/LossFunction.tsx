import { Select } from "@mantine/core"
import { useAtom } from "jotai"
import { hyperParametersAtom } from "../../atoms/hyperParametersAtom"
import { LossFunction as LossFunctionType } from "../../types/types"
import { lossFunctions } from "../../utils/constants"

export function LossFunction() {
  const [hyperParameters, setHyperParametersAtom] = useAtom(hyperParametersAtom)

  return (
    <Select
      label="Loss Function"
      data={lossFunctions}
      defaultValue={lossFunctions[0]}
      onOptionSubmit={(newLossFunction: string) => {
        setHyperParametersAtom({
          ...hyperParameters,
          lossFunction: newLossFunction as LossFunctionType,
        })
      }}
    />
  )
}
