<template>
    <child-component @send-message="sendMessage"/>
</template>
<script>
import childcomponent from'./childcomponent4.vue'
export default {
    components:{childcomponent},
    methods:{
       sendMessage(data){
           console.log(data)
       }
    }
}
</script>