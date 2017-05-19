import { View } from 'backbone.marionette'
import template from './layout.html'

export default View.extend({
    //Defini o elemento onde sera reenderizado este layout.
    el: '.context-js',

    //Seta o layout principal para a view pai.
    template: template,

    //Seta as regioes do proprio layout.
    regions: {
        //Este layout so tem a região main-js.
        main: '.main-js'
    }
})
