import logo from '../../assets/logo.svg';

export const Header = (): JSX.Element => {
  return (
    <header>
      <h2 className="logo">
        <img src={logo} alt="" />
      </h2>
    </header>
  );
};
