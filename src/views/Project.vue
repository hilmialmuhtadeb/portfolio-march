<template>
  <div class="projects">
    <project-card
      v-for="project in projects"
      :key="project.name"
      :project="project" 
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProjectCard from '../components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  computed: {
    ...mapGetters(['projects'])
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
</style>