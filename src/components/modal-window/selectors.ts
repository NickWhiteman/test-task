import { IShowcaseState } from "../../showcase/types";
import { IRootState } from "../../store";

export const selectIsOpenModal = (state: IShowcaseState) => 
  state.isOpenModal;

export const selectDeleteId = (state: IShowcaseState) =>
  state.cardForDeleted;

export const selectIsDeleteMode = (state: IShowcaseState) =>
  state.isDelete;

export const selectGetCards = (state: IRootState) =>
  state.ShowcaseStore.data;