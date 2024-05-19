import { Flex, MantineProvider, createTheme } from "@mantine/core"
import { Graph } from "./components/Graph/Graph"
import { LayersMenu } from "./components/LayersMenu/LayersMenu"

const theme = createTheme({
  primaryColor: "indigo",
})

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Flex justify="between" align="center" w="100%" h="100%" p={30} columnGap={50}>
        <Graph />
        <LayersMenu />
      </Flex>
    </MantineProvider>
  )
}

export default App
