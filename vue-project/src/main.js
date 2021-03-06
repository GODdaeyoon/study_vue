import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n' //i18n 플러그인 추가
import store from './store'

const i18nStrings = {
    en:{
        hi:'Hello!'
    },
    ko:{
        hi:"안녕하세요!"
    }
}

const app = createApp(App)
app.use(router);
app.use(store);
app.use(i18nPlugin,i18nStrings); //i18n 플러그인에 다국어 번역 데이터를 파라미터로 전달
app.mixin(mixins);
app.mount('#app')

app.directive('focus',{
    mointed(el){
        el.focus()
    }
})
// createApp(App).use(router).mixin(mixins).mount('#app')

window.Kakao.init("1b7c8c57967afc7dcfb85452019803cb"); //발급받은 앱 키

