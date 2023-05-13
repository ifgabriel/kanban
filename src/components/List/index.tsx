import { Heading, Skeleton } from '@chakra-ui/react'

import { ModelTask } from '@domain'

import Task from '../Task'
import { useFetchTasks } from '@services'
import { handleStateRender } from '@utils'
import { ExeceptionCard } from '@components'

import styles from './styles.module.scss'

interface ListProps {
  title: string
  tasks: ModelTask[]
}

const List = ({ title }: ListProps) => {
  const { data, isFetched } = useFetchTasks({ state: title })

  return (
    <div>
      <Heading size="lg">{title}</Heading>
      {
        {
          view: !!data && (
            <ul className={styles.List}>
              {data.map((task) => (
                <li key={task.id}>
                  <Task {...task} />
                </li>
              ))}
            </ul>
          ),
          loading: Array.from({ length: 5 }).map((_, index) => <Skeleton key={index} width="100%" height="70px" />),
          error: <ExeceptionCard type="ERROR" title="Oops! we had a problem" description="Try again later." />,
          empty: (
            <ExeceptionCard
              type="EMPTY"
              title="Oops! no tasks"
              description="Create tasks and organize your to-do items"
            />
          ),
        }[handleStateRender(isFetched, data, !data?.length)]
      }
    </div>
  )
}

export default List
