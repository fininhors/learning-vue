<template>
  <div class="p4 code">
    {{ user.id }} (author for {{ user.created | getTimeSense }})
  </div>
</template>

<script>
import axios from "../../plugins/axios"

export default {
  async asyncData(route) {
    const response = await axios.get(`/user/${route.params.id}.json`)
    return { user: response.data }
  }
}
</script>
