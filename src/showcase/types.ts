export type Data = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface IShowcaseState {
  data: Data[]
  cardForDeleted: number | undefined
  isOpenModal: boolean
  isLoading: boolean
  isDelete: boolean
};
