import { atom } from "jotai";
import { HyperParameters } from "../types/types";
import { lossFunctions, optimizers } from "../utils/constants";

export const hyperParametersAtom = atom<HyperParameters>({
  learningRate: 0.1,
  lossFunction: lossFunctions[0],
  optimizer: optimizers[0],
})

