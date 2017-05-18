import { View } from 'backbone.marionette'
import template from './layout.html'

export default View.extend({
    el: '.application-js',
    template: template,

    regions: {
        h1:'.welcome-js'
    },

    initialize(opts = {}) {

    }
})