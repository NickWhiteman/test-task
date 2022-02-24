import { IShowcaseState } from "../showcase/types";
import { ShowcaseActions } from "./action-creator";
import {
  CARDS_FOR_DELETED,
  GET_DATA,
  IS_DELETE,
  IS_LOADING,
  IS_OPEN_MODAL
} from "./action-type";

const initialState: IShowcaseState = {
  data: [],
  cardForDeleted: undefined,
  isLoading: false,
  isDelete: false,
  isOpenModal: false,
};

export const ShowcaseReducer = (
  state: IShowcaseState = initialState,
  action: ShowcaseActions
): IShowcaseState => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state, data: action.payload
      };
    case IS_LOADING:
      return {
        ...state, isLoading: action.payload
      };
    case IS_DELETE:
      return {
        ...state, isDelete: action.payload
      };
    case IS_OPEN_MODAL:
      return {
        ...state, isOpenModal: action.payload
      };
    case CARDS_FOR_DELETED:
      return {
        ...state, cardForDeleted: action.payload
      };
    default:
      return state;
  }
}