import axios from "../plugins/axios"

export const state = () => ({
  users: [],
  items: []
})

export const mutations = {
  setIds(state, ids) {
    state.ids = ids
  },

  setItems(state, items) {
    state.items = items
  }
}

export const actions = {
  async LOAD_ITEMS({ commit }, dataUrl) {
    const response = await axios.get(dataUrl)
    const ids = response.data
    const tenIds = ids.slice(0, 10)
    const itemsPromises = tenIds.map((id) => axios.get(`item/${id}.json`))
    const itemResponses = await Promise.all(itemsPromises)
    const items = itemResponses.map((response) => response.data)

    const realItems = items.map((item) => {
      if (!item) {
        item.title = "Failed to load"
        item.id = 0
      }
      return item
    })

    commit("setItems", realItems)
  }
}
