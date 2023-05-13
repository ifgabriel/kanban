import { memo } from 'react'
import { Badge, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'

import { RemoteTask } from '@data'
import { PriorityColor } from './utils'

const Task = (task: RemoteTask) => (
  <Card padding={4}>
    <CardHeader padding={0} display="flex" justifyContent="space-between" alignItems="flex-start">
      <Heading size="md" color="gray.300">
        {task.title}
      </Heading>
      <Badge variant="subtle" colorScheme={PriorityColor[task.priority]} maxHeight={5}>
        {task.priority}
      </Badge>
    </CardHeader>
    <CardBody padding={0} paddingTop={4}>
      <Text color="gray.400">{task.description}</Text>
    </CardBody>
  </Card>
)

export default memo(Task)
