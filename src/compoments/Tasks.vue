<template>
  <main class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8 is-narrow">
          <h3 class="subtitle">All Tasks</h3>
          <ul>
            <task
                v-for="task in tasks"
                :task="task"
                :key="task.id"
                ></task>
            <li class="task__add">+ New Task</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Task from './Task.vue'

export default {
  data() {
  },
  components: {
    Task
  },
  data() {
    return {
      tasks: [
        { id: 1, title: 'Hello1', dueDate:'11月6日', isDone: false },
        { id: 2, title: 'Hello2', dueDate:'11月7日', isDone: false },
        { id: 3, title: 'Hello3', dueDate:'11月8日', isDone: false },
      ]
    }
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
