import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BooksList } from './books-list/BooksList';
import { searchBookSchema } from './booksSchemas';
import { BooksContainer, Form, StyledButton, useStyles } from './BooksStyles';
import { RootContext } from '../../context/root/RootState';

interface FormValues {
  bookName: string;
}

export const Books = () => {
  const rootContext = useContext(RootContext);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver<yup.AnyObjectSchema>(searchBookSchema),
  });
  const [books, setBooks] = useState<[]>([]);
  const classes = useStyles();

  const searchBook = async (bookName: string) => {
    try {
      rootContext?.handleSetLoading(true);
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}`,
      );

      if (data.items.length > 0) {
        setBooks(data.items);
        reset({
          bookName: '',
        });
        rootContext?.handleSetLoading(false, 1500);
      }
    } catch (e) {
      console.log(e);
      rootContext?.handleSetLoading(false, 1500);
    }
  };

  const onSubmit = ({ bookName }: { bookName: string }) => {
    searchBook(bookName);
  };

  return (
    <BooksContainer>
      <Form onSubmit={handleSubmit(onSubmit)} data-testid='form'>
        <Controller
          name='bookName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              helperText={errors?.bookName?.message}
              variant='outlined'
              label='* Search a book'
              className={classes.root}
              error={!!errors?.bookName?.message}
              inputProps={{
                'data-testid': 'bookName',
              }}
            />
          )}
        />

        <StyledButton
          type='submit'
          variant='contained'
          color='primary'
          data-testid='search-btn'
        >
          Search
        </StyledButton>
      </Form>

      <BooksList books={books} />
    </BooksContainer>
  );
};

export default Books;
