import { Box, SegmentedControl } from "@mantine/core"
import { useState } from "react"
import { Graph3D } from "./Graph3D"
import { Graph2D } from "./Graph2D"

type GraphView = "2D" | "3D"

export function Graph() {
  const [graphView, setGraphView] = useState<GraphView>("3D")
  return (
    <Box pos="relative" w="90%" h="100%">
      <SegmentedControl
        data={["2D", "3D"]}
        value={graphView}
        onChange={(newGraphView) => setGraphView(newGraphView as GraphView)}
        style={{position: "absolute"}}
      />
      {graphView === "2D" ? <Graph2D /> : <Graph3D />}
    </Box>
  )
}
