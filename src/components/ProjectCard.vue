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
        height: 100%;
        object-fit: contain;
      }
    }

    &__description {
      p {
        margin: 1em 0;
        color:lighten($color: black, $amount: 50);
      }

      p:nth-child(3) {
        font-weight: 500;
      }

      a {
        text-decoration: underline 3px solid $green;
        color: $black;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .project-card {
      gap: 1em;
    }
  }

  @media screen and (max-width: 580px) {
    .project-card {
      grid-template-columns: 1fr;
      box-shadow: $box-shadow;

      &__thumbnail {
        box-shadow: none;
      }

      &__description {
        padding: 1em 1em 2em;
      }
    }
  }
</style>