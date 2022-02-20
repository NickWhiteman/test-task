import { createAction } from "@reduxjs/toolkit";

import { Data } from "../showcase/types";

const GET_DATA = "GET_DATA";
const CLOSE_MODAL = "CLOSE_MODAL";

export const ShowcaseAction = {
  getData: createAction( GET_DATA ),
  closeModal: createAction(CLOSE_MODAL),

};