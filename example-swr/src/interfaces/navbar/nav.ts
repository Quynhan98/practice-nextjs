import { IItem } from './item-nav';

export interface INavbar {
  id: number;
  title: string;
  items: IItem[];
  path: string;
}
