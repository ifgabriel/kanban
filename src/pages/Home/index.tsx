import { Container, Grid, Heading } from '@chakra-ui/react'
import { STATES, StateType, RemoteTask } from '@data'
import { List } from '@components'

const tasks: RemoteTask[] = [
  {
    id: 1,
    state: 'TODO',
    title: 'TODO',
    description: 'Description',
    priority: 'HIGH',
  },
  {
    id: 2,
    state: 'DOING',
    title: 'DOING',
    description: 'Description',
    priority: 'MEDIUM',
  },
  {
    id: 3,
    state: 'DONE',
    title: 'DONE',
    description: 'Description',
    priority: 'LOW',
  },
]

const getTasksByState = (state: StateType) => {
  return tasks.filter((task) => task.state === state) ?? []
}

const Home = () => (
  <Container maxW="container.xl">
    <Heading textAlign="center" marginY={8}>TODO</Heading>
    <Grid templateColumns="repeat(3, 1fr)" gap={8}>
      {Object.values(STATES).map((state) => (
        <List state={state} tasks={getTasksByState(state)} />
      ))}
    </Grid>
  </Container>
)

export default Home
