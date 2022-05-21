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
                lastName:'Kim',
                fullName:''
            };
        },
        watch :{
            firstName(){
                this.fullName = this.firstName + ' ' + this.lastName;
            },
            lastName(){
                this.fullMane = this.firstName + ' ' + this.lastName;
            }
        }
    }
</script>