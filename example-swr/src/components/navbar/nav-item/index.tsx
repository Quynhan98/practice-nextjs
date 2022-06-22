import { Link } from 'react-router-dom';
import { IItem } from '../../../interfaces/navbar/item-nav';
import './nav-item.css';
type TProps = {
  itemNav: IItem[];
};

const NavItem = (props: TProps): JSX.Element => {
  const { itemNav } = props;

  return (
    <div className="dropdown-content">
      {itemNav.map((item) => (
        <Link to={item.pathItem} key={item.idItem} className="nav-link">
          <span>{item.titleItem}</span>
        </Link>
      ))}
    </div>
  );
};

export { NavItem };
