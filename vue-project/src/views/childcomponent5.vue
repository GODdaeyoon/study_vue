<template>
    <h1>{{msg}}</h1>
    <button type="button" @click="childFunc" ref="btn">자식 컴포넌트 데이터 변경</button>
</template>
<script>
export default {
    data(){
        return {
            msg: '맛소금'
        }
    },
    methods:{
        childFunc(){
            this.msg='변경된 맛소금';
        }
    }
}
</script>