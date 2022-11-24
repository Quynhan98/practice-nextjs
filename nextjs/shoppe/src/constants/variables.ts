export const NAV_LIST = [
  {
    value: 1,
    name: 'Contact',
    href: '/',
  },
  {
    value: 2,
    name: 'Terms of services',
    href: '/',
  },
  {
    value: 3,
    name: 'Shipping and Return',
    href: '/',
  },
]

export const SOCIAL_ICONS = [
  {
    id: 1,
    alt: 'LinkIn Icon',
    iconURL: '/images/inIcon.svg',
  },
  {
    id: 2,
    alt: 'Facebook icon',
    iconURL: '/images/facebook.svg',
  },
  {
    id: 3,
    alt: 'Instagram icon',
    iconURL: '/images/instagram.svg',
  },
  {
    id: 4,
    alt: 'Twitter icon',
    iconURL: '/images/twitter.svg',
  },
]

export enum BREAKPOINTS {
  SMALL = '(max-width: 320px)',
  MEDIUM = '(max-width: 768px)',
  LARGE = '(max-width: 960px)',
  EXTRA_LARGE = '(max-width: 1200px)',
}

export enum STATUS {
  SOLD_OUT = 'Sold out',
}
