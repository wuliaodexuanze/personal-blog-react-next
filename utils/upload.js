import { post } from './http';

export const upload = async (fileData) => {
  const result = await post('/cms/file', fileData);
  return result
}