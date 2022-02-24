import { useDispatch, useSelector } from "react-redux"
import { Button } from "../button/Button";

export const DeleteConfirm: React.FC = () => {
  const dispatch = useDispatch();
  // const cardId = useSelector();

  const onClose = () => {
    // dispatch(ShowcaseActions.toggleModal())
    // dispatch(ShowcaseActions.modeDelete())
  };

  const onDelete = (id: number) => {

  };

  return (
    <>
      <div className='body__delete'>
        {/* <h3>Удалить {`карточку id ${cardId}?`}?</h3> */}
      </div>
      <div className="footer__modal">
        <Button mode='button' link='link' onClick={onClose}>Отмена</Button>
        {/* <Button mode='button' onClick={() => onDelete(cardId)}>Удалить</Button> */}
      </div>
    </>
  )
}