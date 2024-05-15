import { GearIcon } from "@radix-ui/react-icons"
import { Box, Dialog, Flex, IconButton } from "@radix-ui/themes"
import { LearningRate } from "./LearningRate"
import { LossFunction } from "./LossFunction"
import { Optimizer } from "./Optimizer"

export function HyperParameters() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Box>
          <IconButton variant="ghost">
            <GearIcon width="25px" height="25px" />
          </IconButton>
        </Box>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="30%">
        <Dialog.Title>Hyperparameters</Dialog.Title>
        <Flex direction="column" gap="3">
          <LearningRate />
          <LossFunction />
          <Optimizer />
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
