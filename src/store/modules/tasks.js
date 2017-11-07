import _ from 'lodash'
// initial state
const state = {
  tasks: [],
  isFieldOpen: false,
  currentTaskId: 0
}

// getters
const getters = {
  allTasks: state =>  {
    return state.tasks.filter(task => !task.isDone)
  },
  isFieldOpen: state => state.isFieldOpen
}

// mutations
const mutations = {
  addTask(state, task) {
    state.tasks.push(task)
  },
  toggleField(state) {
    state.isFieldOpen = !state.isFieldOpen
  },
  incrementTaskId(state) {
    state.currentTaskId++
  },
  completeTask(state, targetTask) {
    let task = _.find(state.tasks, (task) => { return task.id == targetTask.id })
    task.isDone = true
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
  },
  completeTask({ commit }, task) {
    setTimeout(() => {
      commit('completeTask', task)
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
