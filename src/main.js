import VueMobileDetection from "vue-mobile-detection";
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueMobileDetection)
  .mount('#app')
