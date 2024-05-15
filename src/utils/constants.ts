export const optimizers = ["SGD", "Adam", "Adamax"] as const

export const lossFunctions = [
  "MeanAbsoluteError",
  "MeanSquaredError",
  "CategoricalCrossentropy",
] as const

export const activationFunctions = [
  "linear",
  "exponential",
  "elu",
  "relu",
  "sigmoid",
  "tanh",
  "softmax",
] as const
