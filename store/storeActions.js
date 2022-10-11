import {
  VIDEO_LOADING,
  VIEW_SITE,
  PAGE_CHANGE,
  SET_NAV
} from './mutation-types'

const stateActions = () => ({
  VIDEO_LOADING ({ commit }, data) {
    commit(VIDEO_LOADING, data)
  },
  VIEW_SITE ({ commit }, data) {
    commit(VIEW_SITE, data)
  },
  PAGE_CHANGE ({ commit }, data) {
    commit(PAGE_CHANGE, data)
  },
  SET_NAV ({ commit }, data) {
    commit(SET_NAV, data)
  }
})

export default stateActions
