import { Box, Heading, Skeleton } from '@chakra-ui/react'

import { useFetchTasks } from '@services'
import { handleStateRender } from '@utils'
import { ExceptionCard, Task } from '@components'
import { ModelTask, StateType } from '@domain'

import styles from './styles.module.scss'

interface ListProps {
  state: StateType,
  tasks: ModelTask[]
}

const handleTitle = (title: StateType) => {
  const titles = {
    TODO: 'A Fazer',
    DOING: 'Em Progresso',
    DONE: 'Feito',
  }

  return titles[title]
}

const List = ({ state }: ListProps) => {
  const { data, isFetched } = useFetchTasks({ state })

  return (
    <Box bgColor='gray.700' className={styles.Container}>
      <Heading size="lg">{handleTitle(state)}</Heading>
      <div>
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
            loading: (
              <Box display='flex' flexDirection='column' gap={3}>
                {Array.from({ length: 5 }).map((_, index) => <Skeleton key={index} width="100%" height="95px" />)}
              </Box>
            ),
            error: <ExceptionCard type="ERROR" title="Oops! Tivemos um problema" />,
            empty: <ExceptionCard type="EMPTY" title="Oops! Não existe tarefas" />,
          }[handleStateRender(isFetched, data, !data?.length)]
        }
      </div>
    </Box>
  )
}

export default List
