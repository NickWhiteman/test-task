import './style/style.css';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HeadShowcase } from "./components/head-showcase/HeadShowcase";
import {
  selectGetCardsData,
  selectGetData,
  selectIsOpenModal,
  selectPageNumber
} from "../components/modal-window/selectors";
import { ModalWindow } from "../components/modal-window/ModalWindow";
import { Data, IShowcaseState } from '../store/types';
import { getDataActions, processedDataActions } from '../store/action-creator';
import { apiGetData } from '../service/api';
import { PageNumbers } from './components/page-numbers/PageNumbers';

export const Showcase: React.FC = () => {
  const dispatch = useDispatch();
  // const isOpen = useSelector(selectIsOpenModal);
  const cards: Data[] = useSelector((selectGetCardsData));
  const dataForPageNumber: Data[] = useSelector((selectGetData));
  const pageNumber = useSelector((selectPageNumber));
  
  useEffect(() => {
    const data = apiGetData();
    data.then(
      (data: Data[]) =>
        dispatch(getDataActions(data))
    )
    // const dataForPage = pageHandler();
    // dispatch(processedDataActions(dataForPage));
  }, [ dispatch ]);

  const pageCounter = useCallback(() => {
    const countPage = [];
    for (let i = 0; i <= dataForPageNumber.length / 10; i++) {
      countPage.push(i);
    }
    return countPage;
  }, [ dataForPageNumber.length ])
  
  const listPageNumbers = pageCounter();

  return (
    <>
      <HeadShowcase />
      <div className="showcase-cards">
        {
          cards &&
          cards.map((card, index) => (
            <div
              key={`card_${index}`}
              className="card-wrapper">
              <div className="card-body">
                <div className="card-title">
                  {
                    card.title
                  }
                </div>
                <img
                  className="card-photo"
                  alt="image_cart"
                  src={card.thumbnailUrl} />
              </div>
            </div>
          ))
        }
      </div>
      <PageNumbers numberPages={listPageNumbers} />
    </>
  )
};