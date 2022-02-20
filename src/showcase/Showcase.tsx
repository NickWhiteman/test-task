import './style/style.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ShowcaseAction } from "../saga/sagaActions"
import { HeadShowcase } from "./components/head-showcase/HeadShowcase";
import { selectGetCards, selectIsOpenModal } from "../components/modal-window/selectors";
import { ModalWindow } from "../components/modal-window/ModalWindow";
import { Data } from './types';

export const Showcase: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpenModal);
  const cards: Data[] = useSelector(selectGetCards);

  useEffect(() => {

    dispatch(ShowcaseAction.getData());
    
  }, [ dispatch ]);

  return (
    <>
      <HeadShowcase />
      {
        cards &&
        cards.map((card) => (
          // cards.id === pageNumber &&
          <div className="card-wrapper">
            <div className="card__body">
              <div className="card-tittle">
                {
                  card.title
                }
              </div>
              <div className="card-photo">
                {
                  card.thumbnailUrl
                }
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
};
