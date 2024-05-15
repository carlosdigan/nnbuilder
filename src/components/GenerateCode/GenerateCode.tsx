import { CodeIcon } from "@radix-ui/react-icons"
import { Box, Dialog, IconButton, Tabs, Tooltip } from "@radix-ui/themes"
import { PythonTensorflowCode } from "./PythonTensorflowCode"

type Props = {
  numLayers: number
}

export function GenerateCode({ numLayers }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Box>
          {numLayers < 2 ? (
            <Tooltip content="Must have at least 2 layers">
              <IconButton variant="ghost" disabled={true}>
                <CodeIcon width="25px" height="25px" />
              </IconButton>
            </Tooltip>
          ) : (
            <IconButton variant="ghost">
              <CodeIcon width="25px" height="25px" />
            </IconButton>
          )}
        </Box>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="60%">
        <Tabs.Root defaultValue="python-tensorflow">
          <Tabs.List>
            <Tabs.Trigger value="python-tensorflow">
              Python Tensorflow
            </Tabs.Trigger>
          </Tabs.List>
          <Box>
            <Tabs.Content value="python-tensorflow">
              <PythonTensorflowCode />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Dialog.Content>
    </Dialog.Root>
  )
}
