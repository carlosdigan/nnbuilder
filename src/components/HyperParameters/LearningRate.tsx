import { TextInput } from "@mantine/core"
import { useAtom } from "jotai"
import { hyperParametersAtom } from "../../atoms/hyperParametersAtom"

export function LearningRate() {
  const [hyperParameters, setHyperParametersAtom] = useAtom(hyperParametersAtom)

  return (
    <TextInput
      label="Learning Rate"
      type="number"
      defaultValue={hyperParameters.learningRate}
      onChange={(e) =>
        setHyperParametersAtom({
          ...hyperParameters,
          learningRate: e.target.valueAsNumber,
        })
      }
      placeholder="Learning Rate"
      
    />
  )
}
