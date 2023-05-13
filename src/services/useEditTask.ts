import { useMutation, useQueryClient } from 'react-query'

import endpoints from './utils/endpoints'
import { makeUrl } from './utils/makeUrl'
import { Api } from './utils/Api'

import { RemoteTask } from '@data'

const useEditTask = () => {
  const client = useQueryClient()

  return useMutation(
    (task: RemoteTask) => {
      console.log('edit', task)
      const path = makeUrl(endpoints.editTask).interpolate({ id: task.id, state: task.state }).build()

      return Api.patch(path, task)
    },
    {
      onSuccess: (_, variable) => {
        client.invalidateQueries(['fetch-tasks', variable.state])
      }
    }
  )
}

export default useEditTask
