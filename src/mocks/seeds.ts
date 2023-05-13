import { MocksType } from './type'

const seeds = (server: MocksType) => {
  server.createList('task', 8)
}

export default seeds
