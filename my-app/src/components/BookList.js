import React from'react';
import books from './challanges/bookData';
import BookDetails from './BookDetails';
import styled from 'styled-components';

const BookList = () => {
  return (
    <BookLists>
      {books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </BookLists>
  );
};

const BookLists = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  // align-items: center;
  text-align: center;
`;

export default BookList;
