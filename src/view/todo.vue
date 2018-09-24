<template>
    <section class="real-app">
        <input type="text"
        class="add-input"
        autofocus
        placeholder="接下来要做什么?"
        @keyup.enter="addTodo"/>
        <item :todo="todo"
        v-for="todo in filteredTodos" :key="todo.id"
        @del="deleteTodo"/>
        <tabs :filter="filter"
        :todos="todos"
        @toggle="toggleFilter"
        @clearAllCompleted="clearAllCompleted"/>
    </section>
</template>

<script>
    import Item from '../components/items.vue'
    import Tabs from '../components/tabs.vue'

    let id = 0
    export default {
        name: "todo",
        components: {
            Item,
            Tabs
        },
        data: function(){
            return {
                todos: [],
                filter: 'All'
            }
        },
        computed: {
            filteredTodos: function(){
                if(this.filter === 'All'){
                    return this.todos;
                }
                let completed = this.filter === 'Completed';
                return this.todos.filter(todo => todo.completed === completed);
            }
        },
        methods: {
            addTodo: function(event){
                let item = {
                    id: id++,
                    content: event.target.value,
                    completed: false
                };
                this.todos.unshift(item);
                event.target.value = '';
            },
            deleteTodo: function(id){
                this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
            },
            toggleFilter: function(state){
                this.filter = state;
            },
            clearAllCompleted: function(){
                this.todos = this.todos.filter(todo => !todo.completed);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .real-app {
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>