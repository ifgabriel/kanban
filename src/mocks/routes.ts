import { Response } from 'miragejs'

import { RemoteTask } from '@data'

import { MocksType } from './type'
import endpoints from '../services/utils/endpoints'

const routes = (server: MocksType) => {
  server.get(endpoints.fetchTasks, function (schema, request) {
    const tasks = schema.all('task').models.filter((task) => task.attrs.state === request.params.state)

    return new Response(200, {}, tasks)
  })

  server.delete(endpoints.deleteTask, function (schema, request) {
    const task = schema.find('task', request.params.id)

    task?.destroy()
    return new Response(202, {})
  })

  server.patch(endpoints.editTask, function (schema, request) {
    const task = schema.find('task', request.params.id)

    const newTask: RemoteTask = JSON.parse(request.requestBody)

    task?.update(newTask)
    return new Response(202, {})
  })
}

export default routes
