<template>
  <div class="project-card">
    <div class="project-card__thumbnail">
      <img :src="require('@/assets/images/projects/thumbnail/' + project.thumbnail)" :alt="project.name">
    </div>
    <div class="project-card__description">
      <h2>{{ project.name }}</h2>
      <p>{{  project.description  }}</p>
      <p>Technology Stack : {{ techStackStringBuilder(project.techStack) }}</p>
      <a :href="project.url">Visit Site</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  methods: {
    techStackStringBuilder(arr) {
      return arr.join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  .project-card {
    display: grid;
    gap: 2em;
    grid-template-columns: 1fr 2fr;
    margin-bottom: 2em;

    &__thumbnail {
      box-shadow: $box-shadow;
      
      img {
        width: 100%;
      }
    }

    &__description {
      p {
        margin: 1em 0;
        color:lighten($color: black, $amount: 40);
      }

      a {
        text-decoration: underline 3px solid $green;
        color: $black;
      }
    }
  }
</style>