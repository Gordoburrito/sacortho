import storeActions from './storeActions'
import storeMutations from './storeMutations'

export const state = () => ({
  videoIsLoading: true,
  siteLoaded: false,
  changing: false,
  noFloatTop: false
})

export const actions = storeActions()

export const mutations = storeMutations()
