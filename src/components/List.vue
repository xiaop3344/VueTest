<template>
    <div>
        <p>评论:</p>
        <ul v-for="(item, index) in comments" :key="index">
            <Item v-for="(comment, index) in comments" :key="index" :comment="comment"/>
        </ul>
    </div>
</template>
<script>
import Item from './Item'
import App from '/'
export default {
    props:['comments'],
    components:{
        Item
    }
}
</script>