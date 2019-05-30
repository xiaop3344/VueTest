<template>
    <div>
        <li>
            <p>{{comment.name}}:</p>
            <p>{{comment.content}}</p>
            <button>删除</button>
            <p>----------------------------</p>
        </li>
    </div>
</template>
<script>
export default {
    props:{
        comment:Object

    }
}
</script>