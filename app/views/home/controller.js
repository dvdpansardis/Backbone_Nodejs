import Marionette from 'backbone.marionette'
import Layout from './layout'
import Title from '../../components/title/controller'

export default Marionette.Object.extend({

    initialize(opts = {}) {
        this.container = opts.container
    },

    async show(qs) {
        this.container.append(this.el)
    }
})

show()