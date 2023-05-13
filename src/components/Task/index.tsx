import { memo } from 'react'
import { Badge, Card, CardBody, CardHeader, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'

import { FileSignatureIcon, FileX2Icon, MoreHorizontalIcon } from 'lucide-react'

import { RemoteTask } from '@data'
import { useDeleteTask, useEditTask } from '@services'

import { PriorityColor } from './utils'

const Task = (task: RemoteTask) => {
  const { mutate: deleteTask } = useDeleteTask()
  const { mutate: editTask } = useEditTask()

  return (
    <Card padding={4} bgColor='gray.800'>
      <CardHeader padding={0} display="flex" justifyContent="space-between" alignItems="flex-start">
        <Heading size="md" color="gray.300">
          {task.title}
        </Heading>
        <Badge variant="subtle" colorScheme={PriorityColor[task.priority]} maxHeight={5}>
          {task.priority}
        </Badge>
      </CardHeader>
      <CardBody padding={0} paddingTop={4} display="flex" justifyContent="space-between" alignItems="flex-start">
        <Text color="gray.400">{task.description}</Text>
        <Menu>
          <MenuButton
            size='sm'
            as={IconButton}
            aria-label='List of task options'
            icon={<MoreHorizontalIcon size={16} />}
          />
          <MenuList>
            <MenuItem icon={<FileSignatureIcon size={16} />} onClick={() => editTask({...task, title: 'Gabriel lindo'})}>Edit</MenuItem>
            <MenuItem icon={<FileX2Icon size={16} />} onClick={() => deleteTask(task)}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </CardBody>
    </Card>
  )
}

export default memo(Task)
