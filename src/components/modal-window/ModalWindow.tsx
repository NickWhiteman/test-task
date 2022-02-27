import './style/style.css';
import { useDispatch, useSelector } from "react-redux";

import { closeIcon } from "../button/iconButton";
import { IModalProps } from "./types"
import { selectIsDeleteMode } from "../../store/selectors";
import { useState } from 'react';
import { isDeleteActions, isOpenModalActions } from '../../store/action-creator';

export const ModalWindow: React.FC<IModalProps> = ({
  modal
}) => {

  const dispatch = useDispatch();
  const [children, setChildren] = useState<JSX.Element>(modal);
  const isDelete = useSelector(selectIsDeleteMode)
  
  const onClose = (): void => {
    isDelete
      ? dispatch(isDeleteActions(false))
      : dispatch(isOpenModalActions(false));
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
              children
            }
          </div>
        </div>
      </div>
    </>
  )
};