// initial state
const state = {
  tasks: [
    
  ],
  isFieldOpen: false,
  currentTaskId: 0
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
  },
  incrementTaskId(state) {
    state.currentTaskId++
  }
}

// actions
const actions = {
  addTask({commit, state}, { title }) {
    const newTask = {
      id: state.currentTaskId,
      title: title,
      dueDate: '11月10日',
      isDone: false
    }
    commit('addTask', newTask)
    commit('incrementTaskId')
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
