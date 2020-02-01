import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue , { head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Girassol|Noto+Serif+JP:400,700&display=swap'
  })
  Vue.component('Layout', DefaultLayout)
}
