import { Application } from 'backbone.marionette'
import Router from './router'
import View from './layout'

const application = new (Application.extend({

    async initialize() {
        //this.$body = $(document.body)
        this.layout = new View().render()
    }

}))()

export const app = application