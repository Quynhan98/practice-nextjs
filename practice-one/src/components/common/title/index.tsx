import { ReactNode } from 'react';
import './title.css';

export interface HeadingProp {
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  extraClass?: string;
  children: string | ReactNode;
}

export const Heading = (props: HeadingProp): JSX.Element => {
  const Tag = props.tag;

  return <Tag className={`main-content__heading ${props.extraClass}`}>{props.children}</Tag>;
};
