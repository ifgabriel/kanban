import { useMutation, useQueryClient } from 'react-query'

import endpoints from './utils/endpoints'
import { makeUrl } from './utils/makeUrl'
import { Api } from './utils/Api'

import { StateType } from '@data'

type Params = {
  id: number,
  state: StateType,
}

const useDeleteTask = () => {
  const client = useQueryClient()

  return useMutation(
    ({ id, state }: Params) => {
      const path = makeUrl(endpoints.deleteTask).interpolate({ id, state }).build()

      return Api.delete(path)
    },
    {
      onSuccess: (_, variable) => {
        client.invalidateQueries(['fetch-tasks', variable.state])
      }
    }
  )
}

export default useDeleteTask
