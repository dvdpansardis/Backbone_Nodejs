'use strict'

import http from 'http'
import app from './server'
import Chalk from 'chalk';

const httpServer = http.createServer(app.callback())

httpServer.listen(3000, function() {
    console.log(Chalk.blue('Server running on 3000...'));
})