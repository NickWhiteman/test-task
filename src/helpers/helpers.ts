import { Data } from "../store/types";

export const deletedData = (id: number, data: Data[]) => 
  data.filter(data => data.id !== id);
