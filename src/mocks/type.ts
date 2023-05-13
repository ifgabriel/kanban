import { Server, Registry } from "miragejs"
import * as  models from './models'
import * as factories from './factories'

type Schema = Registry<typeof models, typeof factories>
export type MocksType = Server<Schema>
