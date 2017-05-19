import Backbone from 'backbone'
import { app } from './app'
import HomeRouter from './views/home/router'

console.log("Main foi carregado pela pagina principal ejs.")

//Função inicial que sera chamada pelo index
async function app_initializate() {
    
    //Primeira roda a ser reenderizada.
    new HomeRouter({
        //Passa ao container a região main do layout principal definido no regions da view.
        container: app.layout.getRegion('main')
    })

    console.log('Router do home criado.')

    //Sem este não realmente não funcionou.
    //http://stackoverflow.com/questions/15260488/marionette-js-approuter-not-firing-on-app-start
    Backbone.history.start({
		pushState: true, hasChange: false, root: '/'
	})

    console.log('Backbone history setado.')
}

//Inicia a aplicação
app_initializate()