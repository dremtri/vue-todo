<template>
    <div id="footer">
        <span>Power by {{author}}</span>
        <br/>
        <span>Hosted by Coding Pages</span>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data: function(){
            return {
                author: 'maomao'
            }
        }
    }
</script>

<style lang="scss" scoped>
    #footer {
        margin: 40px;
        text-align: center;
        color: #eee;
        font-size: 15px;
        text-shadow: 3px 2px 4px #eee;
    }
</style>