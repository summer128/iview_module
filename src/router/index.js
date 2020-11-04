import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import firstPage from '@/views/homeManager/firstPage'
import contentList from '@/views/content/contentList'
import recommendArticle from '@/views/content/recommendArticle'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{title:'首页管理'},
      children:[
        {
          path:'/firstPage',
          name:'firstPage',
          component:firstPage,
          meta:['首页管理','系统管理']
        },
        {
          path:'/contentList',
          name:'contentList',
          component:contentList,
          meta:['内容管理','内容列表']
        },
        {
          path:'/recommendArticle',
          name:'recommendArticle',
          component:recommendArticle,
          meta:['内容管理','文章推荐']
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
  ]
})
// 1.菜单路由跳转
/* <MenuItem name="1-1" to="firstPage">系统首页</MenuItem> */
// 使用to="firstPage"区跳转
// 跳转的页面必须写到children下面路由
// 左面侧边栏只需写一遍，只需要通过路由切换去改变content标签的内容<router-view></router-view>