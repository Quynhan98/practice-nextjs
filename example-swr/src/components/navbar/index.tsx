import { Link } from 'react-router-dom';
import { INavbar } from '../../interfaces/navbar/nav';
import './navbar.css';
import { NavItem } from './nav-item';

type TProps = {
  navItem: INavbar[];
};

const Navbar = (props: TProps): JSX.Element => {
  const { navItem } = props;
  return (
    <>
      <nav>
        <ul className="dropdown-menu">
          {navItem.map((item) => (
            <li key={item.id} className="dropdown-item">
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
              {item.items.length > 0 && <NavItem itemNav={item.items} />}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
