import {
  VIDEO_LOADING,
  VIEW_SITE,
  PAGE_CHANGE,
  SET_NAV
} from './mutation-types.js'

const stateMutations = () => ({
  [VIDEO_LOADING] (state, data) {
    state.videoIsLoading = data
  },
  [VIEW_SITE] (state, data) {
    state.siteLoaded = data
  },
  [PAGE_CHANGE] (state, data) {
    state.changing = data
  },
  [SET_NAV] (state, data) {
    state.noFloatTop = data
  }
})

export default stateMutations
