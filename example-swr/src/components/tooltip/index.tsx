import './tooltip.css';

type TProps = {
  text: string;
};

const Tooltip = (props: TProps): JSX.Element => {
  const { text } = props;
  return <span className="tooltip-text">{text}</span>;
};

export default Tooltip;
