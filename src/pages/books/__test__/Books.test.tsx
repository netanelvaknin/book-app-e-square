import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Books from '../Books';

describe('Books page tests', () => {
  it('should have search field in the component', () => {
    render(<Books />);
    const searchField = screen.getByTestId(/bookName/i);
    expect(searchField).toBeInTheDocument();
  });

  it('should be able to type in input', () => {
    render(<Books />);
    const searchField = screen.getByTestId('bookName') as HTMLInputElement;
    fireEvent.change(searchField, { target: { value: 'test value' } });
    expect(searchField.value).toBe('test value');
  });

  it('should clear the search field value after submitting the form', async () => {
    render(<Books />);
    const searchField = screen.getByTestId('bookName') as HTMLInputElement;
    fireEvent.change(searchField, { target: { value: 'test value' } });
    const submitButton = screen.getByTestId('search-btn');

    act(() => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(searchField).toHaveValue('');
    });
  });
});
