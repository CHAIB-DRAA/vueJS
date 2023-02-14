import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import ArticleDetails from './components/ArticleDetails.vue'

const app = createApp(App);
app.component( 'ArticleDetails' ,ArticleDetails)
createApp(App).use(router).mount('#app')
/* createApp(App).mount('#app') */
