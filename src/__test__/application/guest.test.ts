import * as app from '../../app';
import * as supertest from 'supertest';

describe('Test sample', () => {

  test('/', async () => {
    const response = await supertest(app.init()).get('/');
    expect(response.status).toBe(200);
  });

});
