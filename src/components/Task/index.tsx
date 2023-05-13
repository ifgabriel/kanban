import { memo, useState } from 'react'
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react'
import { FileSignatureIcon, FileX2Icon, MoreHorizontalIcon } from 'lucide-react'

import { RemoteTask } from '@data'
import { Form } from '@components'
import { joinClassName } from '@utils'
import { useDeleteTask } from '@services'

import { PriorityColor } from './utils'
import styles from './styles.module.scss'

const Task = (task: RemoteTask) => {
  const { mutate: deleteTask } = useDeleteTask()

  const [visibleForm, setVisibleForm] = useState(false)

  return (
    <Card padding={4} bgColor='gray.800'>
      <CardHeader padding={0} className={styles.Flex}>
        <Heading size="md" color="gray.300">
          {task.title}
        </Heading>
        <Badge variant="subtle" colorScheme={PriorityColor[task.priority]} maxHeight={5}>
          {task.priority}
        </Badge>
      </CardHeader>
      <CardBody padding={0} paddingTop={4} className={joinClassName(styles.Flex, styles.Description)}>
        <Text color="gray.400">{task.description}</Text>
        <Menu>
          <MenuButton
            size='sm'
            as={IconButton}
            aria-label='Lista de opções da tarefa'
            icon={<MoreHorizontalIcon size={16} />}
          />
          <MenuList>
            <MenuItem icon={<FileSignatureIcon size={16} />} onClick={() => setVisibleForm(true)}>Editar</MenuItem>
            <MenuItem icon={<FileX2Icon size={16} />} onClick={() => deleteTask(task)}>Excluir</MenuItem>
          </MenuList>
        </Menu>
        <Form task={task} isOpen={visibleForm} onClose={() => setVisibleForm(false)} />
      </CardBody>
    </Card>
  )
}

export default memo(Task)
