import { api } from '../utils';

const signUpRoute = '/users/signup';

const authRepository = {
  signUp: async ({email, password, fullName, phoneNumber}) => {
    return api.post('/users/signup', {
      email,
      password,
      full_name: fullName,
      phone_number: phoneNumber
    })
  }
}

export default authRepository;
