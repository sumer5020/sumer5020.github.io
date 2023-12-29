/*https://vitepress.dev/guide/extending-default-theme*/
import { h } from 'vue'
import Theme from 'vitepress/theme'

/*CSS*/
import './style.css'
import './tailwind.css'
import './custome.css'

/*Components*/
import TagSlide from './components/TagSlide.vue'

export default {
  extends: Theme,
  enhanceApp(ctx) {
    ctx.app.component('TagSlide', TagSlide);
  }
}