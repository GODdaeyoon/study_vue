<template>
    <provideInjectChild/>
</template>
<script>
import provideInjectChild from './provideInjectChild'
export default {
    name: '',
    components: {},
    data(){
        return {
            items:['A', 'B']
        };
    },
    provide(){
        return{
            itemLength:this.items.length
        }
    }
}
</script>