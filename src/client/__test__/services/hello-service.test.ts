import * as supertest from 'supertest';
import * as app from '../../../app';
import HelloService from '../../services/hello-service';

describe('/hello test', () => {

  let agent: supertest.SuperTest<supertest.Test>;

  test('/api hello', async (done) => {

    let server = createServer(app);
    const request = supertest.agent(server.app);

    HelloService.hello('http://localhost:' + server.port + '/api').then( result => {
      expect(result).toEqual('Hello world!');
      done();
    });
  });

});

function createServer(app) {
  const newApp = require('http').createServer(app.init());
  newApp.listen(0);
  let port = newApp.address().port;
  console.log('Listen port : ' + port);
  return {
    app: newApp,
    port: port
  };
}
