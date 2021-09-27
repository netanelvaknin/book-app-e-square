import { List } from '@mui/material';
import { BookItem } from './book-item/BookItem';

interface BookListProps {
  books: [];
}

export const BooksList = ({ books }: BookListProps) => {
  return (
    <List>
      {books.map(({ volumeInfo }, bookIndex) => (
        <BookItem bookData={volumeInfo} key={bookIndex} />
      ))}
    </List>
  );
};

export default BooksList;
