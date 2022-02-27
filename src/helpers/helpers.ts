import { Data } from "../store/types";

export const deletedData = (id: number, data: Data[]) => {
  return data.filter((card) => {
    if (card.id !== id)
      return card
  })
}