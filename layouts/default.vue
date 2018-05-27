<template>
  <div>
    <header>
      <nav class="flex w-75 justify-around f4 code pa1">
        <nuxt-link class="link underline-hover" to="/">Home</nuxt-link>
        <nuxt-link class="link underline-hover" to="/new">New Stories</nuxt-link>
        <nuxt-link class="link underline-hover" to="/show">Show Stories</nuxt-link>
        <nuxt-link class="link underline-hover" to="/ask">Ask Stories</nuxt-link>
        <nuxt-link class="link underline-hover" to="/jobs">Job Stories</nuxt-link>
      </nav>
    </header>
    <nuxt/>
  </div>
</template>
<style>
.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
