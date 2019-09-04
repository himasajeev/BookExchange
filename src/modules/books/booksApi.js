import axios from 'axios';
import url from '../apiUrl';

// eslint-disable-next-line import/prefer-default-export
export const fetchGetBooks = async () => {
  try {
    const books = await axios.get(`${url}/books`);
    return books;
  } catch (error) {
    return error;
  }
};

const booksFake = [
  {
    id: 1,
    isbn: 'sads',
    title: 'Matematyka dla kierunkow ekoniomicznych',
    author: 'Henryk Gurgul',
    categories: ['Cenne', 'Bledy drukarskie'],
    price: '20',
    publisher: 'Empik',
    image: 'https://cdn.bonito.pl/zdjecia/4/ea2-matematyka-dla-kierunkow.jpg',
  },
  {
    id: 2,
    isbn: 'asdad',
    title: 'Analiza zdarzeń na rynkach akcji',
    author: 'Henryk Gurgul',
    categories: ['Cenne', 'Bledy drukarskie'],
    price: '30',
    publisher: 'Empik',
    image:
      'https://ecsmedia.pl/c/analiza-zdarzen-na-rynkach-akcji-w-iext47588986.jpg',
  },
];

export const testFetchGetBooks = async () => {
  const books = await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
  return booksFake;
};
