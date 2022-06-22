import { MouseEvent } from 'react';
import './button.css';

type TProps = {
  onHandleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  isDisable?: boolean;
};

const Button = (props: TProps): JSX.Element => {
  const { onHandleClick, title, isDisable } = props;

  return (
    <div className="contained">
      <button onClick={onHandleClick} disabled={isDisable}>
        {title}
      </button>
    </div>
  );
};

export { Button };
