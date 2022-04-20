import IconClick from '@assets/images/icon-click.svg';
import IconSurvey from '@assets/images/icon-survey.svg';
import IconHeart from '@assets/images/icon-heart.svg';
import IconHourglass from '@assets/images/icon-hourglass.svg';
import { ProductProp, ProductCard } from '@components/cards/product-card/index';

export default {
  title: 'Components/Cards',
  component: ProductCard,
};

const products: ProductProp[] = [
  {
    img: IconClick,
    title: 'First click tests',
    desc: 'While most people enjoy casino gambling,',
  },
  {
    img: IconSurvey,
    title: 'Design surveys',
    desc: 'Sports betting, lottery and bingo playing for the fun',
  },
  { img: IconHeart, title: 'Preference tests', desc: 'The Myspace page defines the individual.' },
  {
    img: IconHourglass,
    title: 'Five second tests',
    desc: 'Personal choices and the overall personality of the person.',
  },
];

const Template = (): JSX.Element => {
  return (
    <div className="card-group row mt-5">
      {products.map((item) => (
        <ProductCard {...item} />
      ))}
    </div>
  );
};

export const ProductCards = Template.bind({});
