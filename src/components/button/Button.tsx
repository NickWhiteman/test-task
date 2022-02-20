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
          className='close__button'
          type='button'
          onClick={onClick}>{children}</button>
      );
    case 'button-link':
      return (
        <button
          className={`showcase__button ${link ? link : ''}`}
          type='button'
          onClick={onClick}>{icon}{children}</button>
      );
    case 'button-primary':
      return (
        <button
          className='button primary'
          onClick={onClick}>{children}</button>
      );
    default:
      return <></>;
  };
};