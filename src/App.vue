<template>
  <section>
    <md-list class="todos">
      <h1 class="title">To-dos</h1>
      <md-field>
        <md-input
          class="new-item-input"
          v-model="currentTodo"
          @keydown.enter="addTodo()"
          placeholder="Add a to-do"
        ></md-input>
      </md-field>
      <md-list-item v-for="todo in todos" :key="todo.id" :class="{ editing: todo === editedTodo }">
        <input class="completed-checkbox" type="checkbox" v-model="todo.completed" />
        <span class="md-list-item-text view-todo" @dblclick="editTodo(todo)">{{ todo.label }}</span>
        <md-field class="edit-todo">
          <md-input v-model="todo.label" @keydown.enter="stopEditing()"></md-input>
        </md-field>
        <md-button class="md-accent" @click="removeTodo(todo)">Delete</md-button>
      </md-list-item>
    </md-list>
  </section>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
      editedTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      this.editedTodo = todo;
    },
    stopEditing() {
      this.editedTodo = "";
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
}

.todos {
  min-width: 70%;
  margin: 10px 20px;
}

.title {
  margin-left: 20px;
}

.new-item-input {
  margin: 20px;
}

.edit-todo {
  display: none;
}
.editing {
  font-weight: bold;
  md-field.edit-todo {
  }
  span.view-todo {
    display: none;
  }
  .edit-todo {
    display: flex;
  }
}

.completed-checkbox {
  margin: 10px;
}
</style>