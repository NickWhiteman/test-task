import wretch from 'wretch';

import { URL } from "../showcase/const";

export const apiGetData = () =>
  wretch( URL )
    .get()
    .json();
