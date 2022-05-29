<template>
    <div></div>
</template>
<script>
import ApiMixin from '../api.js'
export default {
    mixins:[ApiMixin], // 사용할 믹스인 파일을 배열로 등록
    data(){
        return{
            productList:[]
        };
    },
    async mounted(){
        this.productList = await this.$callAPI("https://ad81bef5-c4a0-4f30-a76b-98ae46d39f42.mock.pstmn.io/list","get");
        console.log(this.productList)
    }
}
</script>