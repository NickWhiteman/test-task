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
} from "../components/modal-window/selectors";
import {
  cardsForDeletedActions,
  getDataActions,
  isDeleteActions,
  isLoadingActions,
  processedDataActions,
} from "../store/action-creator";
import { ModalWindow } from "../components/modal-window/ModalWindow";
import { Data } from "../store/types";
import { apiGetData } from "../service/api";
import { PageNumbers } from "./components/page-numbers/PageNumbers";
import { Loader } from "./components/loader/Loader";
import { Button } from "../components/button/Button";
import { bucketIcon } from "../components/button/iconButton";

export const Showcase: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const isOpen = useSelector(selectIsOpenModal);
  const cards: Data[] = useSelector(selectGetCardsData);
  const dataForPageNumber: Data[] = useSelector(selectGetData);
  const pageNumber = useSelector(selectPageNumber);

  useEffect(() => {
    dispatch(isLoadingActions());
    const data = apiGetData();
    data.then((data: Data[]) => {
      dispatch(getDataActions(data));
      dispatch(isLoadingActions());
    });
  }, [dispatch]);

  const pageCounter = useCallback(() => {
    const countPage = [];
    for (let i = 0; i <= dataForPageNumber.length / 10; i++) {
      countPage.push(i);
    }
    return countPage;
  }, [dataForPageNumber.length]);

  const listPageNumbers = pageCounter();

  const deleteHandler = (idCard: number) => {
    dispatch(cardsForDeletedActions(idCard));
  };
  
  if(isLoading) return  <Loader />
  return (
    <>
      <HeadShowcase />
      <div className="showcase-cards">
        {
          cards.map((card, index) => (
            <div key={`card_${index}`} className="card-wrapper">
              <Button
                mode="close-button"
                children={bucketIcon}
                onClick={() => deleteHandler(card.id)}
              />
              <div className="card-body">
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
