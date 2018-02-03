import Koa from 'koa';

const PORT = process.env.PORT || 3000;
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello world';
});

app.listen(PORT);
console.log(`App runnning on port ${PORT}`);
