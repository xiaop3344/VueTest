<template>
    <div>
        <h1>评论区</h1>
        <!-- 将添加方法传入子组件 -->
        <Add :addComments="addComments"/>
        <!-- 将comments对象 和删除方法传入子组件 -->
        <List :comments="comments" :deleteComment='deleteComment'/>
    </div>
</template>
<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
    data(){
        return{
           comments :[
               {
                   name:'xiaop',
                   content:'vue yes'
               },
               {
                   name:'xjy',
                   content:'I love you'
               },
               {
                   name:'adfasd',
                   content:'qweqwewqe'
               }
           ]
        }
    },
    methods:{
        addComments(comment){
            // 在首行添加
            this.comments.unshift(comment);
        },
        deleteComment(index){
            this.comments.splice(index,1);
        }
    },
    // 必须要引入import的的组件
    components:{
        Add,
        List
    }
}
</script>
