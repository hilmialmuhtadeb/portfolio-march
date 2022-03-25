<template>
  <div class="achievments">
    <div v-if="achievments.length > 0">

    </div>
    <div v-else>
      <p>No achievment already. Keep spirit!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['achievments'])
  }
}
</script>

<style lang="scss" scoped>
  .achievments {
    padding: 4em 0;
  }
</style>