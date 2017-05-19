/*
import Connect from 'connect'
import ServeStatic from 'serve-static'

const connect = new Connect()

connect.use(new ServeStatic(__dirname)).listen(3000, () =>{
    console.log('loading pages from: ' + __dirname);
    console.log('Server running on 3000...');
});
*/
import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
import render from 'koa-ejs'
import Chalk from 'chalk';
import co from 'co';

const app = new Koa()

render(app, {
    root: path.join(__dirname, 'dist'),
    layout: 'index',
    viewExt: 'ejs',
    cache: false,
    debug: true
})

app.context.render = co.wrap(app.context.render)

app.
    use(serve(path.join(__dirname, 'dist')))  
    .use(async function(ctx) {
        console.log(Chalk.red('Render main page ejs.'));
        await ctx.render('index')
    })

export default app