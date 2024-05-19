import { ActionIcon, Modal, Tabs, Tooltip } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconCode } from "@tabler/icons-react"
import { PythonTensorflowCode } from "./PythonTensorflowCode"

type Props = {
  numLayers: number
}

export function GenerateCode({ numLayers }: Props) {
  const [opened, { open, close }] = useDisclosure()

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        centered
        styles={{ header: { height: 0 } }}
        withCloseButton={false}
      >
        <Tabs defaultValue="python-tensorflow">
          <Tabs.List>
            <Tabs.Tab value="python-tensorflow">Python Tensorflow</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="python-tensorflow">
            <PythonTensorflowCode />
          </Tabs.Panel>
        </Tabs>
      </Modal>
      {numLayers < 2 ? (
        <Tooltip label="Must have at least 2 layers" withArrow>
          <ActionIcon variant="subtle" disabled>
            <IconCode />
          </ActionIcon>
        </Tooltip>
      ) : (
        <ActionIcon variant="subtle" onClick={open}>
          <IconCode />
        </ActionIcon>
      )}
    </>
  )
}
