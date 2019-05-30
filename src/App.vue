<template>
    <div>
        <h1>评论区</h1>
        <Add/>
        <List :comments="comments"/>
    </div>
</template>
<script>
import Add from './components/Add'
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
    components:{
        App,
        List
    }
}
</script>
