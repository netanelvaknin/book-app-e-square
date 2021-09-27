import * as yup from 'yup';

export const searchBookSchema = yup.object().shape({
  bookName: yup
    .string()
    .min(1, 'At least 1 character')
    .required('Required field'),
});
