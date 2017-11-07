<template>
  <div class="task_fields">
    <div class="field">
      <div class="control">
        <input
            v-model="taskTitle"
            class="input"
            type="text" >
      </div>
    </div>
    <div class="button-group">
      <button
          class="button is-primary"
          @click="saveTask({id: 4, title: taskTitle})">
        Add Task
      </button>
      <button
          class="button is-text"
          @click="toggleField">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      taskTitle: '',
    }
  },
  methods: {
    ...mapActions([
      'addTask',
      'toggleField'
    ]),
    saveTask(task) {
      this.addTask(task)
      this.taskTitle = ''
      this.toggleField()
    }
  }
}
</script>

<style lang="css">
</style>
