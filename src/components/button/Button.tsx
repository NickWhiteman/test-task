import { IButtonProps } from "./types";
import './style/style.css';

export const Button: React.FC<IButtonProps> = ({
  mode,
  children,
  icon,
  link,
  onClick
}) => {
  switch (mode) {
    case 'close-button':
      return (
        <button
          className='showcase_close__button'
          type='button'
          onClick={onClick}>{children}</button>
      );
    case 'button-link':
      return (
        <button
          className={`showcase__button${link ? `_${link}` : ''}`}
          type='button'
          onClick={onClick}>{icon}{children}</button>
      );
    case 'button-primary':
      return (
        <button
          className='showcase__button__primary'
          onClick={onClick}>{children}</button>
      );
    default:
      return <></>;
  };
};