import Vue from 'vue'
import Router from 'vue-router'
import locales from 'i18n/locales'
import manual from './manual'
import { loadView, loadDoc} from 'src/utils/lazyLoading'
Vue.use(Router)

const defaultPath = '/zh-CN'
const langs = Object.keys(locales)

function generateDocRouteItem (item, lang) {
  return {
    name: item.name + '-' + lang,
    path: '/' + lang + item.path,
    component: loadDoc(item.name, lang),
    meta: {
      label: locales[lang][item.name.toLowerCase()],
      icon: item.icon
    }
  }
}

function generateDocRoutes (items = [], routes = []) {
  for (let idx = 0, len = langs.length; idx < len; idx++) {

    let lang = langs[idx]

    for (let i = 0, l = items.length; i < l; i++) {
      let item = items[i]
      if (item.name) {
        let route = generateDocRouteItem(item, lang)

        if (item.children) {
          route.children = []
          generateDocRoutes(item.children, route.children)
        }

        routes.push(route)
      } 
    }
  }
  
  return routes
}

const manulRoutes = generateDocRoutes(manual)
console.log(manual)
console.log(manulRoutes)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home-zh-CN',
      path: '/home',
      component: loadView('Home')
    },
    {
      name: 'Demo-zh-CN',
      path: '/demo',
      component: loadView('Demo')
    },
    {
      name: 'Manual-zh-CN',
      path: '/manual',
      component: loadView('Manual'),

      children: [
        {
          name: 'Install-zh-CN',
          path: '/install',
          component: loadDoc('Install', 'zh-CN')
        },
        {
          name: 'Basic-zh-CN',
          path: '/basic',

          children: [
            {
              name: 'Button-zh-CN',
              path: '/button',
              component: loadDoc('Button', 'zh-CN')
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

export {
  router,
  manulRoutes
}