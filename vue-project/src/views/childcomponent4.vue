<template>
    <h1>{{msg}}</h1>
</template>
<script>
export default {
    name: '',
    components: {},
    data(){
        return {
            msg:'자식 컴포넌트로부터 보내는 메시지'
        };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        this.$emit('send-message', this.msg)
    },
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    methods: {}
}
</script>