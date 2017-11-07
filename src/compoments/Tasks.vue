<template>
  <main class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8 is-narrow">
          <h3 class="subtitle">All Tasks</h3>
          <ul>
            <task
                v-for="task in allTasks"
                :task="task"
                :key="task.id"
                ></task>
            <task-field
                v-if="isFieldOpen"
                ></task-field>
            <li @click="toggleField"
                class="task__add">+ New Task</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Task from './Task.vue'
import TaskField from './TaskField.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  components: {
    Task,
    TaskField
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      allTasks: 'allTasks',
      isFieldOpen: 'isFieldOpen'
    })
  },
  methods: {
    ...mapActions(['toggleField'])
  }
}
</script>

<style lang="css">
.task__add {
  color: red;
  margin-top: 8px;
  cursor: pointer;
}
</style>
