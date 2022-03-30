<template>
  <div class="stories">
    <template v-if="isStoriesLoaded">
      <div v-if="stories.length > 0">
        <story-card v-for="story in stories" :key="story.url" :story="story" />
      </div>
      <div v-else>
        <p>Yahh :( There is no story. Will be update soon :p</p>
      </div>
    </template>
    <template v-else>
      <p>LOADING</p>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StoryCard from '../components/StoryCard.vue'

export default {
  components: {
    StoryCard
  },
  computed: {
    ...mapGetters(['stories']),
    isStoriesLoaded() {
      if (this.stories) {
        return true
      }
      return false
    }
  },
  methods: {
    ...mapActions(['getStories'])
  },
  created() {
    this.getStories()
  }
}
</script>

<style lang="scss" scoped>
  .stories {
    padding: 4em 0;
    gap: 2em;
  }
</style>