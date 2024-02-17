export const useAppStore = defineStore('app', () => {
  let count = $ref<number>(0)
  function increment() {
    count++
    console.log(count)
  }
  return $$({ count, increment })
})
