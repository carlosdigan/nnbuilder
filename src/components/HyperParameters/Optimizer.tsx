import { Select } from "@mantine/core"
import { useAtom } from "jotai"
import { hyperParametersAtom } from "../../atoms/hyperParametersAtom"
import { Optimizer as OptimizerType } from "../../types/types"
import { optimizers } from "../../utils/constants"

export function Optimizer() {
  const [hyperParameters, setHyperParametersAtom] = useAtom(hyperParametersAtom)

  return (
    <Select
      label="Optimizer"
      allowDeselect={false}
      data={optimizers}
      defaultValue={optimizers[0]}
      onChange={(newOptimizer: string | null) => {
        setHyperParametersAtom({
          ...hyperParameters,
          optimizer: newOptimizer as OptimizerType,
        })
      }}
    />
  )
}
