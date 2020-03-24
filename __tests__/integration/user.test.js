import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('User', async () => {
  beforeEach(async () => {
    await truncate();
  });

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

  it('should not be able to register with dublicated email', async () => {
    await request(app).post('/users').send({
        name: 'Claudio Silva Junior',
        email: 'claudio@digitalone.com.br',
        password_hash: '123',
      });

    const response = await request(app).post('/users').send({
        name: 'Claudio Silva Junior',
        email: 'claudio@digitalone.com.br',
        password_hash: '123',
      });

    expect(response.status).toBe(400);
  });
});
