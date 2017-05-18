import { app } from './app'
import Router from './router'

async function start() {

    new Router({
        container: app.layout.getRegion('main')
    })

}

start()