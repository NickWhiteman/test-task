import { IShowcaseState } from "../../showcase/types";

export const selectIsOpenModal = (state: IShowcaseState) => 
  state.isOpenModal;

export const selectDeleteId = (state: IShowcaseState) =>
  state.cardForDeleted;

export const selectIsDeleteMode = (state: IShowcaseState) =>
  state.isDelete;

export const selectGetCards = (state: IShowcaseState) =>
  state.data;