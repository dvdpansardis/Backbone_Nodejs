import Marionette from 'backbone.marionette'
import Layout from './layout'
import Radio from 'backbone.radio'

console.log("Controller Home carregado.")

const appChannel  = Radio.channel('sandboxcomponents')

export default Marionette.Object.extend({

    //Função invocada na inicialização do controller.
    initialize(opts = {}) {
        console.log("Controller Home inicializacao invocada.")
        //Seta o container do controller com o container passado como parametro por -
        //quem estiver o invocando.
        this.container = opts.container

        console.log("Container do controller carregado com o parametro opts, contendo ", opts)
    },

    //Função que ira invocar o elemento.
    async render() {

        console.log("Render do layout home invocado ao acessar a rota /")

        //O container é o corpo do template que foi passado, sendo possivel -
        //renderizar ou mostrar um novo layout.
        //this.container.show(new Layout())
        const layout = new Layout().render()

        //layout.getRegion('cmp_alert')
        appChannel.request('show:addcomponent', layout)

        console.log(appChannel)
        console.log(layout)
       // console.log(layout.getRegion('cmp_alert'))
    }
})

