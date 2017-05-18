import { AppRouter } from 'backbone.marionette'
import Controller from './views/home/controller'

export default AppRouter.extend({

  initialize(opts) {
      this.controller = new Controller(opts)
  },

  appRoutes: {
      '(?*qs)': 'show'
  }
})