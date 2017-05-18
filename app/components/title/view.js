import { View } from 'backbone.marionette'
import template from './view.html'

export default View.extend({  
    template: template,

    async initialize(opts = {}){
       this.title = 'hello world';
    }  
})