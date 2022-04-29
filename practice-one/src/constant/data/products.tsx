import iconClick from '@assets/images/icon-click.svg';
import iconSurvey from '@assets/images/icon-survey.svg';
import iconHeart from '@assets/images/icon-heart.svg';
import iconHourglass from '@assets/images/icon-hourglass.svg';

export interface Product {
  img: string;
  title: string;
  desc: string;
}

export const products: Product[] = [
  {
    img: iconClick,
    title: 'First click tests',
    desc: 'While most people enjoy casino gambling,',
  },
  {
    img: iconSurvey,
    title: 'Design surveys',
    desc: 'Sports betting, lottery and bingo playing for the fun',
  },
  { img: iconHeart,
    title: 'Preference tests',
    desc: 'The Myspace page defines the individual.'
  },
  {
    img: iconHourglass,
    title: 'Five second tests',
    desc: 'Personal choices and the overall personality of the person. ',
  },
];
