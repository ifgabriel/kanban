import { Container, Grid, Heading } from '@chakra-ui/react'
import { List } from '@components'
import { STATES } from '@data'

const Home = () => (
  <Container maxW="container.xl" paddingY={10}>
    <Heading textAlign="center" marginBottom={8}>TODO</Heading>
    <Grid templateColumns="repeat(3, 1fr)" gap={8}>
      {Object.values(STATES).map((state) => (
        <List state={state} />
      ))}
    </Grid>
  </Container>
)

export default Home
