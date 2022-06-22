import { MouseEvent } from 'react';
import './popup.css';

export type PopupProp = {
  children: JSX.Element;
  handleClose: (e: MouseEvent) => void;
};

export const Popup = (props: PopupProp): JSX.Element => {
  const { children, handleClose } = props;

  return (
    <div data-testid="popup" className="popup">
      <div className="popup-container">
        <button className="close-icon" onClick={handleClose}>
          &#10008;
        </button>
        {children}
      </div>
    </div>
  );
};
