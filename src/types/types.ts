import { activationFunctions, lossFunctions, optimizers } from "../utils/constants"


export type ActivationFunction = (typeof activationFunctions)[number]

export type Layer = {
  id: string
  nodes: number
  activationFunction: ActivationFunction
}

export type Layers = Layer[]

export type HyperParameters = {
  learningRate: number
  lossFunction: LossFunction
  optimizer: Optimizer
}

export type LossFunction = (typeof lossFunctions)[number]

export type Optimizer = (typeof optimizers)[number]
