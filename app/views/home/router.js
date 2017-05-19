import { AppRouter } from 'backbone.marionette'
import Controller from './controller'

console.log('Router Home carregado.')

export default AppRouter.extend({

    //Inicializa o Router
    initialize(opts) {

        console.log('Router Home inicializacao invocada.')

        //Ao iniciar o Router passa ao controler os parametros passados a rota pelo navegador.
        this.controller = new Controller(opts)

        console.log("Parametro opts carregados no controller, contendo ", opts)
    },

    appRoutes: {
        //Rotas que iram bater no navegador.
        //*qs = variavel para query string.
        //'(?*qs)': 'show'
        '' : 'render'
    }
})