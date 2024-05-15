import { ScrollArea } from "@radix-ui/themes"
import { useAtomValue } from "jotai"
import { CodeBlock, monokaiSublime } from "react-code-blocks"
import { layersAtom } from "../../hooks/useUpdateLayers"
import { ActivationFunction } from "../../types/types"
import { Colors } from "../../utils/colors"
import { CopyCode } from "../CopyCode/CopyCode"
import { hyperParametersAtom } from "../../atoms/hyperParametersAtom"

const inputLayer = (nodes: number, activationFunction: ActivationFunction) =>
  `tf.keras.layers.Dense(${nodes}, activation='${activationFunction}', input_shape=(${nodes},)),`

const regularLayer = (nodes: number, activationFunction: ActivationFunction) =>
  `tf.keras.layers.Dense(${nodes}, activation='${activationFunction}'),`

export function PythonTensorflowCode() {
  const layers = useAtomValue(layersAtom)
  const { learningRate, lossFunction, optimizer } =
    useAtomValue(hyperParametersAtom)
  let layersCode = "\t"
  layersCode += inputLayer(layers[0].nodes.length, layers[0].activationFunction)
  layers
    .slice(1, layers.length)
    .forEach(
      (layer) =>
        (layersCode +=
          "\n\t" + regularLayer(layer.nodes.length, layer.activationFunction))
    )

  const code = `import tensorflow as tf
from tensorflow.keras.optimizers import ${optimizer}
from tensorflow.keras.losses import ${lossFunction}  

model = tf.keras.Sequential([
    ${layersCode}
])

model.compile(optimizer=${optimizer}(learning_rate=${learningRate}), loss=${lossFunction}, metrics=['accuracy'])`

  return (
    <>
      <ScrollArea type="auto" style={{ paddingBottom: 8 }}>
        <CodeBlock
          customStyle={{ color: Colors.code, background: "" }}
          text={code}
          language="python"
          showLineNumbers={false}
          theme={monokaiSublime}
        />
      </ScrollArea>
      <CopyCode code={code} />
    </>
  )
}
