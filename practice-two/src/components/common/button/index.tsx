import { MouseEvent } from 'react';
import './button.css';

export type ButtonProp = {
  color: 'btn-primary' | 'btn-secondary' | 'btn-warning';
  typeButton: 'button' | 'submit' | 'reset';
  children: string | JSX.Element;
  size: 'btn-small' | 'btn-large';
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: ButtonProp): JSX.Element => {
  const { color, children, typeButton, size, handleClick } = props;

  return (
    <button type={typeButton} className={`button ${color} ${size}`} onClick={handleClick}>
      {children}
    </button>
  );
};
