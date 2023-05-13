export const PRIORITYS = {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
} as const

export const STATES = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
} as const

export type StateType = keyof typeof STATES
export type PriorityType = keyof typeof PRIORITYS

export interface RemoteTask {
  id: number
  state: StateType
  title: string
  description?: string
  priority: PriorityType
}
