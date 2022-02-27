import { useDispatch, useSelector } from "react-redux"

import { isDeleteActions, getDataActions } from "../../store/action-creator";
import { Button } from "../button/Button";
import { selectDeleteId, selectGetData } from "../../store/selectors";
import { deletedData } from "../../helpers/helpers";
import { Data } from "../../store/types";


export const DeleteConfirm: React.FC = () => {
  const dispatch = useDispatch();
  const cardId = useSelector(selectDeleteId);
  const dataForPageNumber: Data[] = useSelector(selectGetData);

  const onClose = (): void => {
    dispatch(isDeleteActions(false));
  };
  
  const onDelete = () => {
    const newData = deletedData(cardId, dataForPageNumber);
    dispatch(getDataActions(newData));
    onClose();
  };

  return (
    <>
      <div className='body__delete'>
        <h3>Удалить {`карточку id ${cardId}?`}</h3>
      </div>
      <div className="footer__modal">
        <Button mode='button-link' link='link' onClick={onClose}>Отмена</Button>
        <Button mode='button-primary' onClick={() => onDelete()}>Удалить</Button>
      </div>
    </>
  )
}