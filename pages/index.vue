<template>
  <div class="f1 code">
    Hello World
    <ul>
      <li
        v-for="user in users"
        :key="user.id" >
        {{ user.login }}
      </li>
    </ul>
    {{ users }}
  </div>
</template>
<script>
import axios from "../plugins/axios"

export default {
  async asyncData() {
    const response = await axios.get("users")
    return { users: response.data }
  }
}
</script>
