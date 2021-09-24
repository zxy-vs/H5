import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PluginAxios from './plugins/axios'
import AppCom from './plugins/App'
createApp(App).use(AppCom).use(PluginAxios).use(store).use(router).mount('#app')
