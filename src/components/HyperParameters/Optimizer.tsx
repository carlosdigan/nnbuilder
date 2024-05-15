import { Select, Text } from "@radix-ui/themes"
import { useAtom } from "jotai"
import { hyperParametersAtom } from "../../atoms/hyperParametersAtom"
import { Optimizer as OptimizerType } from "../../types/types"
import { optimizers } from "../../utils/constants"

export function Optimizer() {
  const [hyperParameters, setHyperParametersAtom] = useAtom(hyperParametersAtom)

  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        Optimizer
      </Text>
      <Select.Root
        defaultValue={hyperParameters.optimizer}
        onValueChange={(newOptimizer: OptimizerType) =>
          setHyperParametersAtom({
            ...hyperParameters,
            optimizer: newOptimizer,
          })
        }
      >
        <Select.Trigger variant="surface" style={{ width: "100%" }} />
        <Select.Content>
          <Select.Group>
            {optimizers.map((optimizer) => (
              <Select.Item key={optimizer} value={optimizer}>
                {optimizer}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </label>
  )
}
