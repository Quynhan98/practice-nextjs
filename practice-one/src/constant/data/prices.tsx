export interface Price {
  title: string;
  price: number;
  operators: string;
  cardType?: 'card-standard' | 'card-normal';
}

export const prices: Price[] = [
  { title: 'Free', price: 0, operators: 'Only 2', cardType: 'card-normal' },
  { title: 'Standard', price: 5, operators: '5', cardType: 'card-standard' },
  { title: 'Premium', price: 10, operators: '10', cardType: 'card-normal' },
];
