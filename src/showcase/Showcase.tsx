import './style/style.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { HeadShowcase } from "./components/head-showcase/HeadShowcase";
import { selectGetCards, selectIsOpenModal } from "../components/modal-window/selectors";
import { ModalWindow } from "../components/modal-window/ModalWindow";
import { ShowcaseActions } from "./reducer";
import { Data } from './types';

export const Showcase: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpenModal);
  const cards: Data[] = useSelector(selectGetCards);

  useEffect(() => {
    // dispatch(ShowcaseActions.getData());
  }, [dispatch]);

  return (
    <>
      <HeadShowcase />
      {
        cards.map((cards) => (
          <div className="card-wrapper">
            <div className="card__body">
              <div className="card-tittle">
                {
                  cards.title
                }
              </div>
              <div className="card-photo">
                {
                  cards.thumbnailUrl
                }
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
};
