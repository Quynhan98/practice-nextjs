import './error.css';

type ErrorProp = {
  children: string | JSX.Element;
  onHandleClick: () => void;
};

export const Error = (props: ErrorProp): JSX.Element => {
  const { children, onHandleClick } = props;

  return (
    <div data-testid="error" className="notification-error">
      <button className="icon-close__error" onClick={onHandleClick}>
        x
      </button>
      {children}
    </div>
  );
};
