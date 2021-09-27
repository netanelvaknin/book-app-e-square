import { Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import styled from 'styled-components/macro';

export const BooksContainer = styled.div`
  padding: 5rem;
  @media (max-width: 767px) {
    padding: 3rem;
  }
`;

export const useStyles = makeStyles({
  root: {
    marginRight: '2rem',
    width: '40rem',
    '@media (max-width: 767px)': {
      width: '55%',
    },
  },
});

export const StyledButton = styled(Button)`
  @media (max-width: 767px) {
    width: 35%;
  }
`;

export const Form = styled.form`
  margin-bottom: 2rem;
`;
