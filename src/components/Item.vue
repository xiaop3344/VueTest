<template>
    <div>
        <li>
            <p>{{comment.name}}:</p>
            <p>{{comment.content}}</p>
            <el-button @click='deleteitem'>删除</el-button>
            <p>----------------------------</p>
        </li>
    </div>
</template>
<script>
export default {
    props:{
        comment:Object,
        deleteComment:Function,
        index:Number

    },
    methods:{
        deleteitem(){
            const {comment,index}=this
            if(window.confirm('确定删除'+comment.name+'的评论么?')){
                this.deleteComment(index);
            }
        }
    }
}
</script>