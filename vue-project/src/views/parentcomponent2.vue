<template>
    <child-component @send-message="sendMessage" ref="child_component"/>
</template>
<script>
import childcomponent from './childcomponent2'
export default {
    components:{childcomponent},
    mounted(){
        this.$refs.child_component.callfromparent();
    }
}
</script>