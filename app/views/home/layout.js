import { View } from 'backbone.marionette'
import template from './layout.html'

export default View.extend({

    //Defini o elemento onde sera RENDERIZADO! este layout.
    el: '.main-js',

    //Defini a tag que contera esta view
    tagName: 'div',

    //Setando o template deste componente.
    template: template,
    
    //Seta as regioes do proprio layout.
    regions: {
        //Este layout so tem a região home-js.
        main: "home-js",
        //Region para o component alert
        cmp_alert: "cmp-alert"
    },
})