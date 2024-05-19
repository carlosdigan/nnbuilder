import { CodeHighlight } from "@mantine/code-highlight"
import { Box, ScrollArea } from "@mantine/core"
import { useAtomValue } from "jotai"
import { hyperParametersAtom } from "../../atoms/hyperParametersAtom"
import { layersAtom } from "../../hooks/useUpdateLayers"
import { ActivationFunction } from "../../types/types"

const inputLayer = (nodes: number, activationFunction: ActivationFunction) =>
  `tf.keras.layers.Dense(${nodes}, activation='${activationFunction}', input_shape=(${nodes},)),`

const regularLayer = (nodes: number, activationFunction: ActivationFunction) =>
  `tf.keras.layers.Dense(${nodes}, activation='${activationFunction}'),`

export function PythonTensorflowCode() {
  const layers = useAtomValue(layersAtom)
  const { learningRate, lossFunction, optimizer } = useAtomValue(hyperParametersAtom)
  let layersCode = "\t"
  layersCode += inputLayer(layers[0].nodes, layers[0].activationFunction)
  layers
    .slice(1, layers.length)
    .forEach((layer) => (layersCode += "\n\t" + regularLayer(layer.nodes, layer.activationFunction)))

  const code = `import tensorflow as tf
from tensorflow.keras.optimizers import ${optimizer}
from tensorflow.keras.losses import ${lossFunction}  

model = tf.keras.Sequential([
    ${layersCode}
])

model.compile(optimizer=${optimizer}(learning_rate=${learningRate}), loss=${lossFunction}, metrics=['accuracy'])`

  return (
    <ScrollArea
      type="auto"
      scrollbars="y"
      scrollbarSize={6}
      h="70vh"
      styles={{
        scrollbar: {
          background: "rgba(221, 234, 248, 0.08)",
          borderRadius: 12,
          padding: 0,
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5
        },
        thumb: {
          background: "rgba(217, 237, 255, 0.365)",
        },
      }}
    >
      <Box>
        <CodeHighlight code={code} language="python" styles={{ copy: { position: "absolute", right: 15, background: "none" } }}/>
      </Box>
    </ScrollArea>
  )
}
