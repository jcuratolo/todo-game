export class Todo {
  constructor(
    public id: string,
    public text: string,
    public complete: boolean
  ) {}
}

export class State {
  constructor(public todos: Array<Todo>, public draftTodo: Todo) {}
}

export class Event {
  constructor(public payload: Object) {}
}

export class TodoMarkedAsDone extends Event {
  constructor(id: string) {
    super(id)
  }
}

export class TodoDeleted extends Event {
  constructor(id: string) {
    super(id)
  }
}

export class TodoTextUpdated extends Event {
  constructor(id: string, text: string) {
    super({ id, text })
  }
}
