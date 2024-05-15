import { Select, Text } from "@radix-ui/themes"
import { useAtom } from "jotai"
import { hyperParametersAtom } from "../../atoms/hyperParametersAtom"
import { LossFunction as LossFunctionType } from "../../types/types"
import { lossFunctions } from "../../utils/constants"


export function LossFunction() {
  const [hyperParameters, setHyperParametersAtom] = useAtom(hyperParametersAtom)

  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        Loss Function
      </Text>
      <Select.Root
        defaultValue={hyperParameters.lossFunction}
        onValueChange={(newLossFunction: LossFunctionType) =>
          setHyperParametersAtom({
            ...hyperParameters,
            lossFunction: newLossFunction,
          })
        }
      >
        <Select.Trigger variant="surface" style={{ width: "100%" }} />
        <Select.Content>
          <Select.Group>
            {lossFunctions.map((lossFunction) => (
              <Select.Item key={lossFunction} value={lossFunction}>
                {lossFunction}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </label>
  )
}
