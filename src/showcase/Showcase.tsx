import "./style/style.css";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeadShowcase } from "./components/head-showcase/HeadShowcase";
import {
  selectGetCardsData,
  selectGetData,
  selectIsOpenModal,
  selectPageNumber,
  selectIsLoading,
  selectIsDeleteMode,
  selectDeleteId,
} from "../store/selectors";
import {
  cardIdActions,
  cardsForDeletedActions,
  getDataActions,
  isDeleteActions,
  isLoadingActions,
  isOpenModalActions,
  processedDataActions,
} from "../store/action-creator";
import { ModalWindow } from "../components/modal-window/ModalWindow";
import { Data } from "../store/types";
import { apiGetData } from "../service/api";
import { PageNumbers } from "./components/page-numbers/PageNumbers";
import { Loader } from "./components/loader/Loader";
import { Button } from "../components/button/Button";
import { bucketIcon } from "../components/button/iconButton";
import { Card } from "./components/card/Card";
import { DeleteConfirm } from "../components/modal-window/DeleteConfirm";

export const Showcase: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isOpen = useSelector(selectIsOpenModal);
  const isDelete = useSelector(selectIsDeleteMode);
  const cards: Data[] = useSelector(selectGetCardsData);
  const dataAll: Data[] = useSelector(selectGetData);
  const deletedCard = useSelector(selectDeleteId);
  const pageNumber = useSelector(selectPageNumber);

  useEffect(() => {
    dispatch(isLoadingActions());
    const data = apiGetData();
    data.then((data: Data[]) => {
      dispatch(getDataActions(data));
      dispatch(isLoadingActions());
    });
  }, []);

  const pageCounter = useCallback(() => {
    const countPage = [];
    for (let i = 0; i <= dataAll.length / 10; i++) {
      countPage.push(i);
    }
    return countPage;
  }, [dataAll.length]);

  const listPageNumbers = pageCounter();

  const deleteHandler = (idCard: number) => {
    dispatch(cardsForDeletedActions(idCard));
    dispatch(isDeleteActions(!!idCard));    
  };

  const openModal = (id: number) => {
    dispatch(isOpenModalActions(true));
    dispatch(cardIdActions(id));
  }
  
  if(isLoading) return  <Loader />
  return (
    <>
      <HeadShowcase />
      <div className="showcase-cards">
        {
          isDelete &&
            <ModalWindow
              modal={
                <DeleteConfirm />
              } />
        }
        {
          isOpen &&
            <ModalWindow
              modal={
                <Card />
              } />
        }
        {
          cards.map((card, index) => (
            <div
              key={`card_${index}`}
              className="card-wrapper">
              <Button
                mode="close-button"
                children={bucketIcon}
                onClick={() => deleteHandler(card.id)}
              />
              <div
                className="card-body"
                onClick={() => openModal(card.id)}>
                <div className="card-title">{card.title}</div>
                <img
                  className="card-photo"
                  alt="image_cart"
                  src={card.thumbnailUrl}
                />
              </div>
            </div>
          ))
        }
      </div>
      <PageNumbers numberPages={listPageNumbers} />
    </>
  );
};
