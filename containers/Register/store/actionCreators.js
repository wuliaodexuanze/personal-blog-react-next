// import * as actionTypes from './actionTypes';
import { post } from '../../../utils/http';

export const register = ({username, password, email, confirm_password}) => {
  return async (dispatch) => {
    const data = await post('/cms/user/register', {
      username,
      password,
      email,
      confirm_password,
      group_id: 1
    });
    return data;
  }
}