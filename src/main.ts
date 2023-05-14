import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import router from "./ts/router.ts";
import axios from "axios";
import VueAxios from "vue-axios"
import {createPinia} from 'pinia'

loadFonts()

createApp(App)
	.use(vuetify)
	.use(router)
	.use(VueAxios, axios)
	.use(createPinia())
	.mount('#app')

