import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  registerName: Yup.string()
    .required('Register name is required'),
  store: Yup.string()
    .required('Store is required'),
  posCode: Yup.string()
    .required('POS code is required'),
});