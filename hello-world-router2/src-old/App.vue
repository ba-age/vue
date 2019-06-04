<template>
  <div>
    <Detail id="1" name="hello"></Detail>
    <router-view></router-view>
  </div>
</template>

<script>
import Detail from './views/Detail.vue'
export default {
  components: {
    Detail
  }
}
</script>
