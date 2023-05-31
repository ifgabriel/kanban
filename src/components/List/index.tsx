import { Box, Heading, Skeleton, Text } from '@chakra-ui/react'

import { ExceptionCard, Task } from '@components'
import { StateType } from '@domain'
import { useFetchTasks } from '@services'
import { handleStateRender } from '@utils'

import styles from './styles.module.scss'

interface ListProps {
  state: StateType,
}

const handleTitle = (title: StateType) => {
  const titles: Record<StateType, string> = {
    TODO: 'A Fazer',
    DOING: 'Em Progresso',
    DONE: 'Feito',
  }

  return titles[title]
}

const List = ({ state }: ListProps) => {
  const { data, isFetched } = useFetchTasks({ state })

  return (
    <Box bgColor='gray.200' className={styles.Container}>
      <Heading size="lg">{handleTitle(state)} 
      <Text className={styles.Counter} fontSize='sm' bgColor='gray.300'>
        {data?.length}
        </Text>
      </Heading>
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
