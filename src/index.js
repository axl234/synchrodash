import Koa from 'koa';
import swig from 'swig';

const PORT = process.env.PORT || 3000;
const app = new Koa();

const template = swig.compileFile('build/index.html');

app.use(async (ctx) => {
  ctx.body = template({
    title: 'Hello world',
  });
});

app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`App runnning on port ${PORT}`);
