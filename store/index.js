
import { createClient } from '~/plugins/contentful.js'
export const state = () => ({
  pageData: {}
})

export const mutations = {
  setPageData (state, pageData) {
    state.pageData = pageData
  }

}
export const actions = {
  async nuxtServerInit ({ commit }) {
    const client = createClient()
    const response = await client.getEntries({
      // content_type: 'artistLanding',
      // order: '-sys.createdAt'
      select: ['fields']
    })
      .catch(console.error)
    commit('setPageData', response.items[0].fields)
  }
}
