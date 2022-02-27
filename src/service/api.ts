import { URL } from "../showcase/const";
import { Data } from "../store/types";

export const apiGetData = async () => {
  let returnData: Data[] = []
  await fetch(URL)
    .then((data) =>
      data
        .json()
        .then((data: Data[]) => {
          returnData = data;
        })
        .catch((err) => console.error(err))
    )
    .catch((err) => console.error(err));
  return returnData;
};
