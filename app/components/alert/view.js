import { View } from 'backbone.marionette'
import template from './view.html'

export default View.extend({  
    
    el: 'cmp-alert',

    tagName: 'div',

    ui: {
        text_js : 'text-js'
    },

    events: {
        'click @ui.btn-js': 'onClickBtn'
    },

    template: template,

    async onClickBtn(){
        alert(ui.text_js.val())
    }
})