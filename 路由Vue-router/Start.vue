<template>
  <div>
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Start',
  components: {},

  setup(props, ctx) {
    const name = ref('zhangsan')
    const arr = ref([1, 2, 3, 4])
    const obj = ref({
      mag: 'start'
    })
    // router是全局路由对象，它提供了很多方法
    const router = useRouter()
    const start = () => {
      router.push({
        name: 'Home',
        params: {
          names: name.value,
          arrs: arr.value,
          objs: JSON.stringify(obj)
        }
      })
    }
    return {
      start
    }
  }
})
</script>

<style lang="scss" scoped></style>
