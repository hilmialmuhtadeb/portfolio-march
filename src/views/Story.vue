<template>
  <div class="stories">
    <template v-if="isStoriesLoaded">
      <div class="stories__wrapper" v-if="stories.length > 0">
        <story-card v-for="story in stories" :key="story.url" :story="story" />
      </div>
      <div v-else>
        <p>Yahh :( There is no story. Will be update soon :p</p>
      </div>
    </template>
    <template v-else>
      <story-card-skeleton 
        v-for="i in 3"
        :key="i"
      />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StoryCard from '../components/story/StoryCard.vue'
import StoryCardSkeleton from '../components/story/StoryCardSkeleton.vue'

export default {
  components: {
    StoryCard,
    StoryCardSkeleton
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

    &__wrapper {
      display: grid;
      gap: 1em;
    }
  }
  @media screen and (max-width: 768px) {
    .stories {
      padding: 2em 0;
    }
  }
</style>