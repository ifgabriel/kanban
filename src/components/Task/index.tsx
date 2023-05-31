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
  Text,
  ToastPosition,
  useToast
} from '@chakra-ui/react'
import { FileSignatureIcon, FileX2Icon, MoreHorizontalIcon } from 'lucide-react'
import { memo, useState } from 'react'

import { Form } from '@components'
import { ModelTask } from '@domain'
import { useDeleteTask } from '@services'
import { joinClassName } from '@utils'

import styles from './styles.module.scss'
import { PriorityColor } from './utils'

const Task = (task: ModelTask) => {
  const toast = useToast()
  const { mutate: deleteTask } = useDeleteTask()

  const [visibleForm, setVisibleForm] = useState(false)

  const handleDelete = (task: ModelTask) => {
    const toastConfig = {
      duration: 7000,
      isClosable: true,
      variant: 'left-accent',
      position: 'top-right' as ToastPosition
    }

    deleteTask(task, {
      onSuccess: () => {
        toast({
          description: `${task.title} successfully deleted`,
          status: 'success',
          ...toastConfig,
        })
      },
      onError: () => {
        toast({
          description: 'Unable to delete task ${data.title}. Try again later.',
          status: 'error',
          ...toastConfig,
        })
      }
    })
  }

  return (
    <Card padding={4}>
      <CardHeader padding={0} className={styles.Flex}>
        <Heading size="md">
          {task.title}
        </Heading>
        <Badge variant="subtle" colorScheme={PriorityColor[task.priority]} maxHeight={5}>
          {task.priority}
        </Badge>
      </CardHeader>
      <CardBody padding={0} paddingTop={4} className={joinClassName(styles.Flex, styles.Description)}>
        <Text>{task.description}</Text>
        <Menu>
          <MenuButton
            size='sm'
            as={IconButton}
            aria-label='Lista de opções da tarefa'
            icon={<MoreHorizontalIcon size={16} />}
          />
          <MenuList>
            <MenuItem icon={<FileSignatureIcon size={16} />} onClick={() => setVisibleForm(true)}>Editar</MenuItem>
            <MenuItem icon={<FileX2Icon size={16} />} onClick={() => handleDelete(task)}>Excluir</MenuItem>
          </MenuList>
        </Menu>
        <Form task={task} isOpen={visibleForm} onClose={() => setVisibleForm(false)} />
      </CardBody>
    </Card>
  )
}

export default memo(Task)
