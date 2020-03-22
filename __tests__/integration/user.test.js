import request from 'supertest';
import app from '../../src/app';

describe('User', async () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'kraudio',
        email: 'kraudio@gmail.com',
        password_hash: '12343121',
      });

    expect(response.body).toHaveProperty('id');
  });
});
