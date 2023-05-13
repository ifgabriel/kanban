import { ModelTask, PriorityType, StateType } from "@domain"

export interface FormProps {
  isOpen: boolean,
  onClose: () => void,
  task: ModelTask,
}

export type StateOptions = {
  label: string,
  value: StateType
}

export type PriorityOptions = {
  label: string,
  value: PriorityType
}