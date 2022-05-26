<template>
    <child-component @send-message="sendMessage" ref="child_component"/>
</template>
<script>
import childcomponent from './childcomponent'
export default {
    components:{childcomponent},
    mounted(){
        this.$refs.child_component.$refs.btn.click();
    }
}
</script>