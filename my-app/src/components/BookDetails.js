import React from'react';
import styled from 'styled-components';

const BookDetails = ({book}) => {
  return (
    <ListBooks>
      <BookTatile>Title: {book.title}</BookTatile>
      <Author>Author: {book.author}</Author>
      <Year>Year: {book.year}</Year>
    </ListBooks>
  );
};

const ListBooks = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const BookTatile = styled.h2`
  font-size: 25px;
  font-weight: bold;
  // mergin-bottom: 0;
  // padding: 0;  
  // border-radius: 8px;
  // color: #333;
`;

const Author = styled.p`
  font-size: 20px;
  // font-weight: bold;
  // mergin-top: 0;
  // padding: 0;  
`;

const Year = styled.p`
  font-size: 16px;
  `;

export default BookDetails;