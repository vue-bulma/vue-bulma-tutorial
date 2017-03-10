import * as types from './mutation-types'

export const toggleSidebar = ({ commit }, opened) => commit(types.TOGGLE_SIDEBAR, opened)

export const togglePage = ({ commit }, pageName) => commit(types.TOGGLE_PAGE, pageName)

export const toggleDevice = ({ commit }, device) => commit(types.TOGGLE_DEVICE, device)

export const switchEffect = ({ commit }, effectItem) => {
  if (effectItem) {
    commit(types.SWITCH_EFFECT, effectItem)
  }
}

export const toggleLang = ({ commit }, lang) => commit(types.TOGGLE_LANG, lang)
