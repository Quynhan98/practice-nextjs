import iconClick from '@assets/images/icon-click.svg';
import iconSurvey from '@assets/images/icon-survey.svg';
import iconHeart from '@assets/images/icon-heart.svg';
import iconHourglass from '@assets/images/icon-hourglass.svg';
import { ProductProp } from '@components/cards/product-card';

interface Main {
  product: ProductProp[];
}

export const mainData: Main = {
  product: [
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
  ],
};
