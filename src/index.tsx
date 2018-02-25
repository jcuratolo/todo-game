import {
  State,
  Todo,
  TodoMarkedAsDone,
  TodoDeleted,
  TodoTextUpdated
} from "./types"

function updateTodo(todo: Todo, event: TodoTextUpdated): Todo {
  if (todo.id === event.payload.id) todo.text = event.payload.text

  return todo
}

function updateTodo(todo: Todo, event: TodoMarkedAsDone): Todo {
  if (todo.id === event.payload.id) todo.complete = true

  return todo
}

function updateTodo(todo: Todo, event: TodoDeleted): Todo {
  if (todo.id === event.payload.id) todo.destroy = true

  return todo
}

function updateTodos(todos: Array<Todo>, event: Event): Array<Todo> {
  return todos.map(todo => updateTodo(todo, event))
}

function update(state: State, event: Event): State {
  return {
    todos: updateTodos(state.todos, event),
    draftTodo: updateTodo(state.draftTodo, event)
  }
}
