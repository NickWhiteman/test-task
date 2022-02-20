import { IData, IShowcaseState } from "./types";

export const selectorGetData  = (state: IShowcaseState): IData[] => {
  return state.data;
}