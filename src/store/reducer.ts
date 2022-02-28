import { IShowcaseState } from "./types";
import { ShowcaseActions } from "./action-creator";
import {
  ALBUM_ID,
  CARDS_FOR_DELETED,
  CARD_ID,
  GET_DATA,
  IS_DELETE,
  IS_LOADING,
  IS_OPEN_MODAL,
  PAGE_NUMBER,
  PROCESSED_DATA,
} from "./action-type";

const initialState: IShowcaseState = {
  data: [],
  processedData: [],
  pageNumber: 0,
  cardForDeleted: 0,
  idAlbum: 1,
  idCard: 0,
  isLoading: false,
  isDelete: false,
  isOpenModal: false
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
    case CARD_ID:
      return {
        ...state, idCard: action.payload
      }
    case IS_LOADING:
      return {
        ...state, isLoading: !state.isLoading
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
    case PROCESSED_DATA:
      return {
        ...state, processedData: action.payload
      };
    case PAGE_NUMBER:
      return {
        ...state, pageNumber: action.payload
      };
    case ALBUM_ID:
      return {
        ...state, idAlbum: action.payload
      }
    default:
      return state;
  }
}