import { post } from '../../../utils/request';

export const login = (username, password) => {
  return async (dispatch) => {
    const data = await post('/cms/user/login', { username, password });
    return data;
  }
}