import authRepository from './auth';
import { api } from '../utils';

describe('authRepository', () => {
  describe('signUp', () => {
    it('call the api correctlyand sign up', async () => {
      const fakeUser = {
        email: 'some@user.com',
        password: '12345678',
        fullName: 'Some User',
        phoneNumber: '3121234567',
      };

      const postSpy = jest.spyOn(api, 'post');

      await authRepository.signUp(fakeUser);

      expect(postSpy).toBeCalledWith('/users/signup', {
        email: 'some@user.com',
        password: '12345678',
        full_name: 'Some User',
        phone_number: '3121234567'
      })
    });
  });
});
