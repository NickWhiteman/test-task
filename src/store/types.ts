export type Data = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface IShowcaseState {
  data: Data[]
  processedData: Data[]
  pageNumber: number
  cardForDeleted?: number
  isOpenModal: boolean
  isLoading: boolean
  isDelete: boolean
};
