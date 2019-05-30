<template>
    <div>
        <h1>评论区</h1>
        <Add :addComments="addComments"/>
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
            this.comments.unshift(comment);
        },
        deleteComment(index){
            this.comments.splice(index,1);
        }
    },
    components:{
        Add,
        List
    }
}
</script>
