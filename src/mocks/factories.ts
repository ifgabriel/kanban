import { Factory } from 'miragejs'
import { random } from './utils'

export const task = Factory.extend({
  state() {
    return ['TODO', 'DOING', 'DONE'][random(3)]
  },
  priority() {
    return ['HIGH', 'MEDIUM', 'LOW'][random(3)]
  },
  title() {
    return ['[FRONTEND] Create Header', '[FRONTEND] Create Integration', '[FRONTEND] Create Mocks'][random(3)]
  },
  description() {
    return ['Create screen header', 'Create screen integration', 'Create screen integration'][random(3)]
  },
})
