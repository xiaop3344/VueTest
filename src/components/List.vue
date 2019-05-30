<template>
    <div>
        <p>评论:</p>
        <p v-show="comments.length===0">暂无评论</p>
        <ul v-for="(comment, index) in comments" :key="index">
            <Item :comment="comment" :deleteComment='deleteComment' :index='index'/>
        </ul>
    </div>
</template>
<script>
import Item from './Item'
export default {
    props:['comments','deleteComment'],
    components:{
        Item
    }
}
</script>