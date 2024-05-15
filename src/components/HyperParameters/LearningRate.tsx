import { Text, TextField } from "@radix-ui/themes"
import { useAtom } from "jotai"
import { hyperParametersAtom } from "../../atoms/hyperParametersAtom"

export function LearningRate() {
  const [hyperParameters, setHyperParametersAtom] = useAtom(hyperParametersAtom)

  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        Learning Rate
      </Text>
      <TextField.Root
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
    </label>
  )
}
