<template>
    <div>
        <h2>添加评论</h2>
        <p>名字:</p>
        <el-input type="text" v-model="name" suffix-icon="el-icon-circle-check"></el-input>
        <p>评论内容</p>
        <el-input type="text" style="width:222px" v-model="content"/>
        <br>
        <br>
        <UE :defaultMsg='defaultMsg' ref="ue"/>
        <br><br>
        <el-button type="primary"  plain @click="getUEContent">添加富文本</el-button>
        <br><br>
        <p>刚刚添加的内容:</p>
        <div v-html="uemsg"></div>
        <br><br>
        <el-button type="primary"  plain @click="add">添加</el-button>
    </div>
</template>
<script>
import UE from './UE.vue';
export default {
    // 接收父组件传来的值
    components:{UE},
    props:{
        addComments:{
            type:Function,
            required:true
        }
    },
    data(){
            return {
                name:'',
                content:'',
                defaultMsg:'请添加输入!',
                uemsg:''
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
        },
        getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.uemsg=content;
        console.log(content)
      }
    }
}
</script>