import * as app from 'app';
import * as supertest from 'supertest';

describe('/guest-api test', () => {

  let agent: supertest.SuperTest<supertest.Test>;

  test('/api hello()', (done) => {
    const request = supertest.agent(app.init());
    const query = {
      query: `
        query {
          hello,
          plus(a: 1, b: 2)
        }
      `
    };

    const expected = {
      hello: 'Hello world!',
      plus: 3
    };

    request.post('/api')
      .set('Accept', 'application/json')
      .send(query)
      .then(res => {
        expect(res.body.data).toEqual(expected);
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
