import { Data, IShowcaseState } from "../showcase/types";

export const selectorGetData  = (state: IShowcaseState): Data[] => {
  return state.data;
}

export const selectorIsLoading  = (state: IShowcaseState) => {
  return state.isLoading;
}