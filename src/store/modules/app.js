import * as types from '../mutation-types'
import router from 'src/router'

const state = {
  current: {
    page: '',
    lang: 'zh-CN'
  },
  device: {
    isMobile: false,
    isTablet: false
  },
  sidebar: {
    opened: false,
    hidden: false
  },
  effect: {
    translate3d: true
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_PAGE] (state, pageName) {
    state.current.page = pageName
  },

  [types.TOGGLE_SIDEBAR] (state, opened) {
    if (state.device.isMobile) {
      state.sidebar.opened = opened
    } else {
      state.sidebar.opened = true
    }
  },

  [types.SWITCH_EFFECT] (state, effectItem) {
    for (let name in effectItem) {
      state.effect[name] = effectItem[name]
    }
  },

  [types.TOGGLE_LANG] (state, lang) {
    if (state.current.lang === lang) return

    router.push(router.currentRoute.path.replace(state.current.lang, lang))
    state.current.lang = lang
  }

}

export default {
  state,
  mutations
}
