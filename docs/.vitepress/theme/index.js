import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout
}
