import Koa from 'koa';
import Socket from 'socket.io';
import http from 'http';
import swig from 'swig';
import serve from 'koa-serve';

const PORT = process.env.PORT || 3000;
const app = new Koa();

const template = swig.compileFile('build/index.html');

app.use(serve('assets', __dirname));

app.use(async (ctx) => {
  ctx.body = template({
    title: 'Hello world',
  });
});

const server = http.createServer(app.callback());
const io = new Socket(server);

io.on('connection', () => {
  // eslint-disable-next-line no-console
  console.log('client connected!');
});

server.listen(PORT);

// eslint-disable-next-line no-console
console.log(`App runnning on port ${PORT}`);
