import './style/style.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HeadShowcase } from "./components/head-showcase/HeadShowcase";
import { selectGetCards, selectIsOpenModal } from "../components/modal-window/selectors";
import { ModalWindow } from "../components/modal-window/ModalWindow";
import { Data, IShowcaseState } from './types';
import { getDataActions } from '../store/action-creator';
import { URL } from "../showcase/const";
import { apiGetData } from '../service/api';

export const Showcase: React.FC = () => {
  const dispatch = useDispatch();
  // const isOpen = useSelector(selectIsOpenModal);
  const cards: Data[] = useSelector((selectGetCards));
  
  useEffect(() => {

    const data = apiGetData();
    data.then(
      (data: Data[]) =>
        dispatch(getDataActions(data))
    )

  }, [ dispatch ]);
  
  
  console.log(cards);
  return (
    <>
      <HeadShowcase />
      {
        cards &&
        cards.map((card, index) => (
          // cards.id === pageNumber &&
          <div key={ `card_${index}` } className="card-wrapper">
            <div className="card__body">
              <div className="card-tittle">
                {
                  card.title
                }
              </div>
              <img className="card-photo" src={ card.thumbnailUrl }/>
            </div>
          </div>
        ))
      }
    </>
  )
};