<template>
    <header class="main-header">
        <h1>{{headerTitle}}</h1>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data: function(){
            return {
                headerTitle: 'TodoApp'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-header {
        text-align: center;
        h1 {
            font-size: 100px;
            color: rgba(175, 47, 47, 0.4);
            margin: 20px;
        }
    }
</style>