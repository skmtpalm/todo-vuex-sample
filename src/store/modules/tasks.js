// initial state
const state = {
  tasks: [
    { id: 1, title: 'Hello1 vuex', dueDate:'11月6日', isDone: false },
    { id: 2, title: 'Hello2 vuex', dueDate:'11月7日', isDone: false },
    { id: 3, title: 'Hello3 vuex', dueDate:'11月8日', isDone: false },
  ],
  isFieldOpen: false
}

// getters
const getters = {
  allTasks: state => state.tasks,
  isFieldOpen: state => state.isFieldOpen
}

// mutations
const mutations = {
  addTask(state, payload) {
    state.tasks.push(payload)
  },
  toggleField(state) {
    state.isFieldOpen = !state.isFieldOpen
  }
}

// actions
const actions = {
  addTask({commit}, payload) {
    commit('addTask', payload)
  },
  toggleField({commit}) {
    commit('toggleField')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
