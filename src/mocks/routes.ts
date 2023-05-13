import { Response } from 'miragejs'
import { MocksType } from './type'
import endpoints from '../services/utils/endpoints'

const routes = (server: MocksType) => {
  server.get(endpoints.fetchTasks, function (schema, request) {
    const tasks = schema.all('task').models.filter((task) => task.attrs.state === request.params.state)
    
    return new Response(200, {}, tasks)
  })
}

export default routes
