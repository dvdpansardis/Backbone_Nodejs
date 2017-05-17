import { AppRouter } from 'backbone.marionette'
import Home from '../home/view'

AppRouter.on('start', async function() {
    var home = new home(document.getElementById('body'));
})