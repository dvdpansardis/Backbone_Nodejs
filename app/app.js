import { Application } from 'backbone.marionette'
import HomeRouter from './views/home/router'
import LayoutView from './layout'

console.log("App foi carregado pelo main ao realizar o load do module.")

//Duvida: por que envolver o Application em () na criação?

const application = new (Application.extend({

    //Metodo invocado na inicialização da aplicação
    async initialize() {

        console.log("Funcao de Initializacao da app.")

        //Seta o layout da aplicação e já invoca a reendericação
        //Dentro deste layout sera renderizado o layout
        this.layout = new LayoutView().render()

        console.log("Layout principal renderizado no layout da aplicação, conteudo do layout", this.layout)
    }

}))()

//Exporta uma constante app contendo a constante application
//export const app = application
export const app = application