import React from 'react';
import Book from '../../components/Book/Book';

const Store = () => {
  return (
    <div>
      <Book
        id={1}
        isbn="200xs"
        title="Matematyka dla kierunkow ekoniomicznych"
        author="Charles Dance"
        categories={['category1', 'category2']}
        price="20"
        publisher="Henryk gurgul"
        image="https://cdn.bonito.pl/zdjecia/4/ea2-matematyka-dla-kierunkow.jpg"
      />
    </div>
  );
};

export default Store;
