import { IRootState } from "../../store";

export const selectIsOpenModal = (state: IRootState) => 
  state.ShowcaseStore.isOpenModal;

export const selectIsLoading = (state: IRootState) => 
  state.ShowcaseStore.isLoading;

export const selectDeleteId = (state: IRootState) =>
  state.ShowcaseStore.cardForDeleted;

export const selectIsDeleteMode = (state: IRootState) =>
  state.ShowcaseStore.isDelete;

export const selectGetData = (state: IRootState) =>
  state.ShowcaseStore.data;

export const selectGetCardsData = (state: IRootState) =>
  state.ShowcaseStore.processedData;

export const selectPageNumber = (state: IRootState) =>
  state.ShowcaseStore.pageNumber;