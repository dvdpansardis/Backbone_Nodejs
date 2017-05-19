import Marionette from 'backbone.marionette'
import ViewLayout from './view'

console.log("Component carregado")

const component = new (Marionette.Object.extend({

    channelName: 'sandboxcomponents',

    radioRequests: {
        'show:addcomponent': 'addComponent'
    },

    addComponent(opts = {}){
        console.log("requisitando a construcao do componente")
        console.log("parametros", opts)
        const view = new ViewLayout()
        console.log("view antes render: ", view)
        //view.render()
        console.log("view depois render: ", view)
        opts.show(view)
        console.log("fim addComponent")
    }
}))()

export const cmp = component