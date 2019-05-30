<template>
    <div>
        <h2>添加评论</h2>
        <p>名字:</p>
        <input type="text" v-model="name">
        <p>评论内容</p>
        <input type="text" v-model="content">
        <br>
        <br>
        <button @click="add">添加</button>
    </div>
</template>
<script>
export default {
    props:{
        addComments:{
            type:Function,
            required:true
        }
    },
    data(){
            return {
                name:'',
                content:''
            }
        },
    methods:{
        add(){
            const {name,content}=this;
            if(!name||!content){
                alert("姓名或内容不能为空")
                return
            }
            const comment ={name:name,content:content}
            this.addComments(comment);
            this.name=''
            this.content=''
        }
    }
}
</script>