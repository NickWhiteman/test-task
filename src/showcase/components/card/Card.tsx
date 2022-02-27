import { useSelector } from "react-redux";

import { selectGetCardsData, selectIdCard } from "../../../store/selectors";
import { Data } from "../../../store/types";

export const Card: React.FC = () => {

  const cards: Data[] = useSelector(selectGetCardsData);
  const idCards = useSelector(selectIdCard);
  const dataItem = cards.find(data => data.id === idCards)

  return (
    <>
      <div className="body__content__card-wrapper">
        <div className="body__content__card__body">
          <div className="body__content__card-tittle">
            {
              dataItem?.title
            }
          </div>
          <img
            className="body__content__card-photo"
            alt="detail_photo"
            src={dataItem?.url} />
        </div>
      </div>
    </>
  );
};
