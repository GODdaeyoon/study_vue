<template>
    <child-component @send-message="sendMessage" ref="child_component"/>
    <button type="button" @click="changechilddata">change child data</button>
</template>
<script>
import childcomponent from './childcomponent3'
export default {
    components:{childcomponent},
    methods:{
        changechilddata(){
            this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
        }
    }
}
</script>