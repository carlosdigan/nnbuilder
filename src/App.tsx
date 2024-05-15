import { Flex } from "@radix-ui/themes"
import { MyGraph } from "./components/Graph/MyGraph"
import { LayersMenu } from "./components/LayersMenu/LayersMenu"

function App() {
  return (
    <Flex justify="between" width="100%" height="100%" p="6" gapX="9">
      <MyGraph layers={[1, 2, 3, 4, 1, 2]} />
      <LayersMenu />
    </Flex>
  )
}

export default App
