<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
        <TodoList v-bind:propsdata="todoItems"
                  v-on:removeTodoItem="removeOneItem"
                  v-on:toggleComplete="toggleOneCompleted"></TodoList>
        <TodoFooter v-on:clearAll="removeAllItems"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
    data: function () {
        return {
            todoItems: []
        }
    },
    methods: {
        addOneItem: function (todoItem) {
            let obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeOneItem: function (todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        },
        toggleOneCompleted: function (todoItem, index) {
            this.todoItems[index].completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        removeAllItems: function () {
            localStorage.clear();
            this.todoItems = [];
        }
    },
    created() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    const str = localStorage.getItem(localStorage.key(i));
                    const obj = JSON.parse(str);
                    this.todoItems.push(obj);
                }
            }
        }
    },
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter
    }
}
</script>

<style>
body {
    text-align: center;
    background-color: #F6F6F6;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
