<template>
  <div>
    <div class="bb mb4">
      <div class="mb1">
        <span class="i">{{ item.id }} - </span>
        <nuxt-link :to="'/user/' + item.by">
          {{ item.by }}
        </nuxt-link> {{ item.time | getTimeSince }} ago
      </div>
      <div class="f6" v-html="item.text" />
    </div>
    <ul class="ml3">
      <comment v-for="id in item.kids" :id="id" :key="id" />
    </ul>
  </div>
</template>

<script>
import axios from "~/plugins/axios"

export default {
  name: "Comment",
  data() {
    return {
      item: {},
      kids: []
    }
  },
  props: [
    "id"
  ],

  async beforeMount() {
    const response = await axios.get(`item/${this.id}.json`)
    this.item = response.data
  },

  async mounted() {
    if (this.item.kids) {
      const idToPromise = (id) => axios.get(`item/${id}.json`)
      const kidPromises = this.item.kids.map(idToPromise)
      const kidResponses = await Promise.all(kidPromises)
      this.kids = kidResponses.map((res) => res.data)
    }
  }
}
</script>
