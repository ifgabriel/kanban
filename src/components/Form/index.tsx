import { ReactNode, memo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useToast,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  ToastPosition,
  FormErrorMessage
} from '@chakra-ui/react'
import * as yup from 'yup'

import { ModelTask } from '@domain'
import { useEditTask } from '@services'

import styles from './styles.module.scss'
import { FormProps, StateOptions, PriorityOptions } from './types'

interface FieldProps {
  name: string,
  label: string,
  children: ReactNode
}

const stateOptions: StateOptions[] = [
  {
    label: 'To Do',
    value: 'TODO',
  },
  {
    label: 'On Progress',
    value: 'DOING',
  },
  {
    label: 'Done',
    value: 'DONE',
  },
]

const priorityOptions: PriorityOptions[] = [
  {
    label: 'High',
    value: 'HIGH',
  },
  {
    label: 'Medium',
    value: 'MEDIUM',
  },
  {
    label: 'Low',
    value: 'LOW',
  },
]

const schema = yup.object({
  title: yup.string().required('O campo é obrigatório'),
  description: yup.string().required('O campo é obrigatório'),
  state: yup.string().required('Selecione uma opção'),
  priority: yup.string().required('Selecione uma opção')
})


const Form = ({ isOpen, onClose, task }: FormProps) => {
  const toast = useToast()
  const { mutate: editTask } = useEditTask()
  const {
    handleSubmit,
    register,
    formState: { isValid, errors }
  } = useForm({ defaultValues: task, resolver: yupResolver(schema) })

  const handleEdit = (data: ModelTask) => {
    const toastConfig = {
      duration: 7000,
      isClosable: true,
      variant: 'left-accent',
      position: 'top-right' as ToastPosition
    }

    editTask(data, {
      onSuccess: () => {
        onClose()
        toast({
          description: `${data.title} successfully edited`,
          status: 'success',
          ...toastConfig,
        })
      },
      onError: () => {
        toast({
          description: 'Unable to edit task ${data.title}. Try again later.',
          status: 'error',
          ...toastConfig,
        })
      }
    })
  }

  const Field = ({ label, children, name }: FieldProps) => (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>
      {children}
      {!!errors[name] && (
        <FormErrorMessage>{errors[name].message}</FormErrorMessage>
      )}
    </FormControl>
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(handleEdit)} className={styles.Form}>
            <Field name='title' label='Título'>
              <Input {...register('title')} />
            </Field>
            <Field name='description' label='Descrição'>
              <Textarea {...register('description')} />
            </Field>
            <Field name='state' label='Estado'>
              <Select {...register('state')}>
                {stateOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Field>
            <Field name='priority' label='Prioridade'>
              <Select {...register('priority')}>
                {priorityOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Field>
            <ModalFooter>
              <Button type='submit' disabled={!isValid}>
                Confirmar
              </Button>
              <Button variant='ghost' onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default memo(Form)
