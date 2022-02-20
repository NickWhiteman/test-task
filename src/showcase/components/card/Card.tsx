import { CartModel } from "../types";

export const Card: React.FC<CartModel> = ({ title, url }) => {
  return (
    <>
      <div className="body__content__card-wrapper">
        <div className="body__content__card__body">
          <div className="body__content__card-tittle">
            {
              title
            }
          </div>
          <div className="body__content__card-photo">
            {
              url
            }
          </div>
        </div>
      </div>
    </>
  );
};
