import { ActionIcon, Flex, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { LearningRate } from "./LearningRate"
import { LossFunction } from "./LossFunction"
import { Optimizer } from "./Optimizer"
import { IconSettings } from "@tabler/icons-react"

export function HyperParameters() {
  const [opened, { open, close }] = useDisclosure()

  return (
    <>
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={close}
        title="Hyperparameters"
        styles={{ content: { padding: 5 }, title: { fontWeight: "bold", fontSize: 24 } }}
        centered
      >
        <Flex direction="column" gap="3">
          <LearningRate />
          <LossFunction />
          <Optimizer />
        </Flex>
      </Modal>

      <ActionIcon variant="subtle" onClick={open}>
        <IconSettings  />
      </ActionIcon>
    </>
  )
}
