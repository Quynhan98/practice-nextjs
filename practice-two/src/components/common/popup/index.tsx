import { MouseEvent } from 'react';
import './popup.css';

export type PopupProp = {
  children: JSX.Element;
  handleClose: (e: MouseEvent) => void;
};

export const Popup = (props: PopupProp): JSX.Element => {
  const { children, handleClose } = props;

  return (
    <div className="popup">
      <div className="popup-container">
        <span className="close-icon" onClick={handleClose}>
          &#10008;
        </span>
        {children}
      </div>
    </div>
  );
};
