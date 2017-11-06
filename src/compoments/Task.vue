<template>
  <li class="task__item">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <input type="checkbox">
        </div>
        <div class="level-item task__item__title">
          {{ task.title }}
        </div>
      </div>

      <div class="level-right">
        <div class="level-item task__item__due">
          <time>{{ task.dueDate }}</time>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['task']
}
</script>

<style lang="scss" scoped>
$right-gray: hsl(0, 0%, 86%);
$gray: hsl(0, 0%, 50%);
  .task__item {
    padding: 0.5rem 0;
    border-top: 1px solid $right-gray;
    &:last-child {
      border-bottom: 1px solid $right-gray;
    }
    &__title {
    }
    &__due {
      font-size: 0.8em;
      color: $gray;
    }
  }
  input[type='checkbox'] {
    margin-right: 6px;
  }
</style>
