<template>
  <div class="stories">
    <div v-if="stories.length > 0">

    </div>
    <div v-else>
      <p>Yahh :( There is no story. Will be update soon :p</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['stories'])
  }
}
</script>

<style lang="scss" scoped>
  .stories {
    padding: 4em 0;
  }
</style>