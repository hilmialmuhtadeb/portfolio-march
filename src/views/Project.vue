<template>
  <div class="projects">
    <template v-if="isProjectsLoaded">
      <project-card
        v-for="project in projects"
        :key="project.name"
        :project="project" 
      />
    </template>
    <template v-else>
      <project-card-skeleton v-for="i in 3" :key="i" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProjectCard from '../components/project/ProjectCard.vue'
import ProjectCardSkeleton from '../components/project/ProjectCardSkeleton.vue'

export default {
  components: {
    ProjectCard,
    ProjectCardSkeleton
  },
  computed: {
    ...mapGetters(['projects']),
    isProjectsLoaded() {
      if (this.projects) {
        return true
      }
      return false
    }
  },
  methods: {
    ...mapActions(['getProjects'])
  },
  created() {
    this.getProjects()
  }
}
</script>

<style lang="scss" scoped>
  .projects {
    padding: 4em 0;
  }

  @media screen and (max-width: 768px) {
    .projects {
      padding: 2em 0;
    }
  }
</style>