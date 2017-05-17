import { view } from 'backbone.marionette'
import $ from 'jquery'

export default View.extend({  
    id: 'title',
    tagName: 'h1',
    initialize: function(element){
       element.append(this.el);
    }
})