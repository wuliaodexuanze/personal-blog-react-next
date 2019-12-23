import { get } from './request';

class User {

  static async getUser() {
    const user = await get('/cms/user/information');
    return user;
  }
}

export default User;