// initial state
const state = {
  tasks: [
    { id: 1, title: 'Hello1 vuex', dueDate:'11月6日', isDone: false },
    { id: 2, title: 'Hello2 vuex', dueDate:'11月7日', isDone: false },
    { id: 3, title: 'Hello3 vuex', dueDate:'11月8日', isDone: false },
  ]
}

// getters
const getters = {
  allTasks: state => state.tasks
}

export default {
  state,
  getters
}
