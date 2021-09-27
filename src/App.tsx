import { useContext } from 'react';
import { RootContext } from './context/root/RootState';
import Books from './pages/books/Books';
import { StyledBlockUI } from './styles';
import 'react-block-ui/style.css';

export const App = () => {
  const rootContext = useContext(RootContext);

  return (
    <StyledBlockUI
      tag='div'
      blocking={rootContext?.loading}
      message='loading...'
      keepInView
    >
      <Books />
    </StyledBlockUI>
  );
};

export default App;
