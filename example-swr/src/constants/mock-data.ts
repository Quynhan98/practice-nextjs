import listBlack from '../assets/list-black.svg';
import heartBlack from '../assets/heart-black.svg';
import starBlack from '../assets/star-black.svg';
import watchListBlack from '../assets/watch-list-black.svg';

const navHeader = [
  {
    id: 1,
    title: 'Movies',
    items: [
      {
        idItem: 1,
        titleItem: 'Popular',
        pathItem: '/',
      },
      {
        idItem: 2,
        titleItem: 'Now Playing',
        pathItem: '/now-playing',
      },
      {
        idItem: 3,
        titleItem: 'Upcoming',
        pathItem: '/up-coming',
      },
      {
        idItem: 4,
        titleItem: 'Top Rated',
        pathItem: '/top-rated',
      },
    ],
    path: '/',
  },
  {
    id: 2,
    title: 'Favorite Movies',
    items: [],
    path: '/favorite-movies',
  },
];

const optionsContent = [
  {
    id: 1,
    title: 'Add to list',
    src: listBlack,
    alt: 'Add to list',
  },
  {
    id: 2,
    title: 'Favorite',
    src: heartBlack,
    alt: 'Favorite',
  },
  {
    id: 3,
    title: 'Watchlist',
    src: watchListBlack,
    alt: 'Watchlist',
  },
  {
    id: 4,
    title: 'Your rating',
    src: starBlack,
    alt: 'Your rating',
  },
];

const options = [
  {
    id: 1,
    src: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789.svg',
    alt: 'Add to list',
    text: 'Add to list',
  },
  {
    id: 2,
    src: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e.svg',
    alt: 'Favorite',
    text: 'Remove from your favorite list',
  },
  {
    id: 3,
    src: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd.svg',
    alt: 'Watchlist',
    text: 'Add to your watchlist',
  },
  {
    id: 4,
    src: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa.svg',
    alt: 'Your rating',
    text: 'Rate It!',
  },
];

const navFooter = [
  {
    id: 1,
    title: 'THE BASICS',
    items: [
      {
        idItem: 1,
        titleItem: 'About TMDB',
        pathItem: '#',
      },
      {
        idItem: 2,
        titleItem: 'Contact Us',
        pathItem: '#',
      },
      {
        idItem: 3,
        titleItem: 'Support Forums',
        pathItem: '#',
      },
      {
        idItem: 4,
        titleItem: 'API',
        pathItem: '#',
      },
      {
        idItem: 5,
        titleItem: 'System Status',
        pathItem: '#',
      },
    ],
    path: '/',
  },
  {
    id: 2,
    title: 'GET INVOLVED',
    items: [
      {
        idItem: 1,
        titleItem: 'Contribution Bible',
        pathItem: '#',
      },
      {
        idItem: 2,
        titleItem: 'Add New Movie',
        pathItem: '#',
      },
      {
        idItem: 3,
        titleItem: 'Add New TV Show',
        pathItem: '#',
      },
    ],
    path: '#',
  },
  {
    id: 3,
    title: 'COMMUNITY',
    items: [
      {
        idItem: 1,
        titleItem: 'Guidelines',
        pathItem: '#',
      },
      {
        idItem: 2,
        titleItem: 'Discussions',
        pathItem: '#',
      },
      {
        idItem: 3,
        titleItem: 'Leaderboard',
        pathItem: '#',
      },
      {
        idItem: 4,
        titleItem: 'Twitter',
        pathItem: '#',
      },
    ],
    path: '#',
  },
  {
    id: 4,
    title: 'LEGAL',
    items: [
      {
        idItem: 1,
        titleItem: 'Terms of Use',
        pathItem: '#',
      },
      {
        idItem: 2,
        titleItem: 'API Terms of Use',
        pathItem: '#',
      },
      {
        idItem: 3,
        titleItem: 'Privacy Policy',
        pathItem: '#',
      },
    ],
    path: '#',
  },
];

const sortingOptions = [
  {
    id: 1,
    title: 'Popularity Descending',
    sort_by: 'popularity.desc',
  },
  {
    id: 2,
    title: 'Popularity Ascending',
    sort_by: 'popularity.asc',
  },
  {
    id: 3,
    title: 'Rating Descending',
    sort_by: 'vote_average.desc',
  },
  {
    id: 4,
    title: 'Rating Ascending',
    sort_by: 'vote_average.asc',
  },
  {
    id: 5,
    title: 'Release Date Descending',
    sort_by: 'primary_release_date.desc',
  },
  {
    id: 6,
    title: 'Release Date Ascending',
    sort_by: 'primary_release_date.asc',
  },
  {
    id: 7,
    title: 'Title (A-Z)',
    sort_by: 'title.asc',
  },
  {
    id: 8,
    title: 'Title (Z-A)',
    sort_by: 'title.desc',
  },
];

export { navHeader, optionsContent, options, navFooter, sortingOptions };
