import './style/style.css';
import { useDispatch, useSelector } from "react-redux";

import { ShowcaseActions } from "../../showcase/reducer";
import { closeIcon } from "../button/iconButton";
import { IModalProps } from "./types"
import { selectIsDeleteMode } from "./selectors";

export const ModalWindow: React.FC<IModalProps> = ({
  mode,
  cardId,
}) => {

  const dispatch = useDispatch();
  const isDelete = useSelector(selectIsDeleteMode)
  
  const onClose = (): void => {
    // isDelete &&
    //   dispatch(ShowcaseActions.modeDelete());
    // dispatch(ShowcaseActions.toggleModal());
  }

  return (
    <>
      <div className={`modal-background ${isDelete ? 'delete' : 'fullHeight'}`}>
        <div className="modal__body">
          <div className="body__header">
            <div className="wrapper"></div>
            <div className="header__name">{}</div>
            <div className="header__close" onClick={onClose}>{ closeIcon }</div>
          </div>
          <div className="body__content">
            {
              
            }
          </div>
        </div>
      </div>
    </>
  )
};