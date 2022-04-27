import './social-icon.css';

export type Social = {
  iconSocial: string;
  desc: string;
};

export interface SocialProp {
  social: Social[];
}

export const SocialIcons = ({ social }: SocialProp): JSX.Element => {
  const listIcon = social;
  const updatedList: JSX.Element[] = listIcon.map((item) => {
    return (
      <li key={item.desc.toString()}>
        <a href="#">
          <img src={item.iconSocial} className="icon__link" alt={item.desc} />
        </a>
      </li>
    );
  });

  return <ul className="d-flex footer-icon">{updatedList}</ul>;
};
