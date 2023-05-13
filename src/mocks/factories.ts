import { Factory } from 'miragejs'
import { random } from './utils'

export const task = Factory.extend({
  state() {
    return ['TODO', 'DOING', 'DONE'][random(3)]
  },
  priority() {
    return ['HIGH', 'MEDIUM', 'LOW'][random(3)]
  },
  title() {
    return [
      '[FRONTEND] Criar o componente Card do panel de tarefas', 
      '[FRONTEND] Criar Integração de tarefas em TODO', 
      '[FRONTEND] Criar mocks para tarefas em TODO',
      '[FRONTEND] Criar configuração do MirageJS'
    ][random(3)]
  },
  description() {
    return [
      'Nessa tarefa deve ser feito o componente de Card usado nas listas de tarefas.', 
      'Nessa tarefa deve ser feito a integração das tarefas por estado utilizando o react-query', 
      'Nessa tarefa deve ser feito o mock de tarefas utilizando mirageJS',
    ][random(3)]
  },
})
