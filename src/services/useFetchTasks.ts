import { useQuery } from 'react-query'

import endpoints from './utils/endpoints'
import { makeUrl } from './utils/makeUrl'
import { Api } from './utils/Api'
import { RemoteTask } from '@data'

interface Params {
  state: string
}

const useFetchTasks = ({ state }: Params) => useQuery(
  ['fetch-tasks', state],
  () => {
    const path = makeUrl(endpoints.fetchTasks).interpolate({ state }).build()

    return Api.get<string, RemoteTask[]>(path).then(({ data }) => data)
  },
  {
    enabled: !!state,
  },
)


export default useFetchTasks
