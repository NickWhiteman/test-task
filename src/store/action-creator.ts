import { Data } from "./types";
import {
  CARDS_FOR_DELETED,
  GET_DATA,
  IS_DELETE,
  IS_LOADING,
  IS_OPEN_MODAL,
  PAGE_NUMBER,
  PROCESSED_DATA
} from "./action-type";

export type ShowcaseActions =
  | ReturnType<typeof getDataActions>
  | ReturnType<typeof isLoadingActions>
  | ReturnType<typeof isOpenModalActions>
  | ReturnType<typeof isDeleteActions>
  | ReturnType<typeof cardsForDeletedActions>
  | ReturnType<typeof processedDataActions>
  | ReturnType<typeof pageNumberActions>


export const getDataActions = ( data: Data[] ) =>
  ({
    type: GET_DATA,
    payload: data,
  } as const);
  
export const isLoadingActions = ( isLoading: boolean ) =>
  ({
    type: IS_LOADING,
    payload: isLoading,
  } as const);

export const isOpenModalActions = (isOpenModal: boolean) =>
  ({
    type: IS_OPEN_MODAL,
    payload: isOpenModal,
  } as const);

export const isDeleteActions = (isDelete: boolean) =>
  ({
    type: IS_DELETE,
    payload: isDelete,
  } as const);

export const cardsForDeletedActions = (cardId: number) =>
  ({
    type: CARDS_FOR_DELETED,
    payload: cardId,
  } as const);

export const processedDataActions = (data: Data[]) =>
  ({
    type: PROCESSED_DATA,
    payload: data,
  } as const);

export const pageNumberActions = (pageNumber: number) =>
  ({
    type: PAGE_NUMBER,
    payload: pageNumber,
  } as const);
  