import { RestSerializer, createServer } from 'miragejs'

import seeds from './seeds'
import routes from './routes'
import include from './include'
import * as models from './models'
import * as factories from './factories'

const makeServer = () =>
  createServer({
    models,
    factories,
    serializers: {
      application: RestSerializer.extend({ embed: true, root: false, include }),
    },
    seeds(server) {
      seeds(server)
    },
    routes() {
      routes(this)
    },
  })

export default makeServer
