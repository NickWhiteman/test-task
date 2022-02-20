import { Data, IShowcaseState } from "./types";

export const selectorGetData  = (state: IShowcaseState): Data[] => {
  return state.data;
}