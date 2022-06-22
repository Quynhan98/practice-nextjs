import './option.css';

type TProps = {
  onHandleClick: (id: number) => void;
  id: number;
};

const Optional = (props: TProps): JSX.Element => {
  const { id, onHandleClick } = props;
  return (
    <div className="option" onClick={() => onHandleClick(id)}>
      <span></span>
    </div>
  );
};

export default Optional;
