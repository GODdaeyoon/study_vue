<template>
    <div>
        <h1>Full Name :{{fullName}}</h1>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                firstName:'Daeyoon',
                lastName:'Kim'
            };
        },
        computed:{
            fullName(){
                return this.firstName + ' ' + this.lastName;
            }
        }
    }
</script>