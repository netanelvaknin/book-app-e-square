import { Avatar, Divider, ListItem, ListItemAvatar } from '@mui/material';

interface BookData {
  title: string;
  imageLinks: any;
}

interface BookItemProps {
  bookData: BookData;
}

export const BookItem = ({ bookData }: BookItemProps) => {
  const { title, imageLinks } = bookData;

  return (
    <div style={{ maxWidth: '720px' }}>
      <ListItem>
        {imageLinks && imageLinks.smallThumbnail && (
          <ListItemAvatar>
            <Avatar
              src={imageLinks.smallThumbnail}
              alt={`${title} thumbnail`}
            />
          </ListItemAvatar>
        )}

        <span>{title}</span>
      </ListItem>
      <Divider />
    </div>
  );
};

export default BookItem;
