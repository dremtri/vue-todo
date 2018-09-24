<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './view/header.vue'
    import Footer from './view/footer.vue'
    import Todo from './view/todo.vue'
    export default {
        name: 'app',
        data: function() {
            return {
                text: 'msg'
            }
        },
        components: {
            Header,
            Footer,
            Todo
        }
    }
</script>

<style lang="scss" scoped>
    #app {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    #cover {
        @extend #app;
        background-color: #555;
        opacity: 0.5;
        z-index: -1;
    }
</style>