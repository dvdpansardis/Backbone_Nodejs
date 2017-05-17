
import Connect from 'connect'
import ServeStatic from 'serve-static'

const connect = new Connect()

connect.use(new ServeStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});

