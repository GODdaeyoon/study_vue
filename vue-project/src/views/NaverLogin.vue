<template>
    <div>
        <div id="naverIdLogin"></div>
        <button type="button" @click="logout">로그아웃</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
            naverLogin: null,
        };
    },
    mounted() {
        this.naverLogin = new window.naver.LoginWithNaverId({
            clientId : "i174zYNdmCHtITvjbEh9", //개발자센터에 등록한 clientId
            callbackUrl : "http://localhost:8080/naverlogin", //개발자센터에 등록한 callbakUrl
            isPopup:true, // 팝업을 통한 연동처리 여부
            loginButton: {
                color :"green", type:3, height:60 //로그인 버튼의 타입을 지정
            },
        });
        //설정 정보를 초기화하고 연동을 준비
        this.naverLogin.init();
        this.naverLogin.getLoginStatus((status) => {
            if(status){
                console.log(status);
                console.log(this.naverLogin.user);
                //필수적으로 받아야 하는 프로필 정보가 있다면 callback 처리 시점에 체크
                var email = this.naverLogin.user.getEmail();
                if(email == undefined || email == null){
                    alert("이메일은 필수 정보입니다. 정보 제공을 동의해주세요.");
                    //사용자 정보 재동의를 위하여 다시 네이버아이디로그인 동의 페이지로 이동함.
                    this.naverLogin.reprompt();
                    return;
                }
            }else{
                console.log("callback 처리에 실패하였습니다.")
            }
        });
    },
    methods: {
        logout() {
            const accessToken = this.naverLogin.accessToken.accessToken;
            const url = `/oauth2.0/token?grant_type=delete&client_id=i174zYNdmCHtITvjbEh9&client_secret=mdBz2bWRSP&access_token=${accessToken}&service_provider=NAVER`;

            axios.get(url).then((res) => {
                console.log(res.data);
            });

            alert("로그아웃 성공!");

            // https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=zFcLWPMTcDQTNTB6iIOy&client_secret=bUW7FZMpS9&access_token=AAAAOOCeX4fAa_NxKPAmJW8C1UeLxGT3nM0wRV33irhyHyRua1JJrfrp0jZwfbOD0r502Id9mbhb0YiA9_NvCXGAwws&service_provider=NAVER
        }
    }
}
</script>