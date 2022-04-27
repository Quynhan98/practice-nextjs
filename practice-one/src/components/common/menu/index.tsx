import './menu.css';

export interface MenuProp {
  menuItem: string[];
}

export const NavMenu = ({ menuItem }: MenuProp): JSX.Element => {
  const list: string[] = menuItem;
  const updatedList: JSX.Element[] = list.map((item) => {
    return (
      <li className="nav-item" key={item.toString()}>
        <a className="nav-list nav-link" href="#">
          {item}
        </a>
      </li>
    );
  });

  return <ul className="navbar-nav">{updatedList}</ul>;
};
