import './button.css';

export interface ButtonProp {
  color: 'primary' | 'secondary' | 'outline-green';
  type: 'button' | 'submit' | 'reset';
  textTransform?: 'text-lowercase' | 'text-uppercase' | 'text-capitalize';
  children: string;
  extraClass: string;
}

export const Button = ({
  color,
  children,
  type,
  extraClass,
  textTransform,
}: ButtonProp): JSX.Element => {
  let className = '';

  if (color) {
    className = `button-${color}`;
  }

  return (
    <button type={type} className={`${className} ${extraClass} ${textTransform} btn-lg`}>
      {children}
    </button>
  );
};
