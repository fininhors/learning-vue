import Vue from "vue"
import { distanceInWordsToNow } from "date-fns"
import { parse } from "url"

Vue.filter("getTimeSince", (timestamp) => {
  const time = Number(timestamp) * 1000
  return distanceInWordsToNow(time)
})

Vue.filter("getHostName", (url) => {
  return parse(url).host.replace(/^www\./, "")
})
