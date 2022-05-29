<template>
  <div class="achievments">
    <template v-if="achievments">
      <div v-for="(achievment, index) in achievments" :key="index" class="achievment-card">
        <h2>{{ achievment.title }}</h2>
        <p>{{ achievment.description }}</p>
        <h5 :class="{'achademical': achievment.isAcademichal}">{{ achievment.date }}</h5>
      </div>
    </template>
    <div v-else>
      <p>No achievment already. Keep spirit!</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['achievments'])
  },
  methods: {
    ...mapActions(['getAchievments'])
  },
  created () {
    this.getAchievments()
  }
}
</script>

<style lang="scss" scoped>
  .achievments {
    padding: 4em 0;

    .achievment-card {
      margin-bottom: 1rem;

      h5.achademical {
        text-decoration: underline 3px solid #0AA1DD;
      }

      h5 {
        text-decoration: underline 3px solid salmon;
        color:lighten($color: black, $amount: 50);
        margin-bottom: 2rem;
      }
      
      p {
        color:lighten($color: black, $amount: 50);
        margin: .4rem 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .achievments {
      padding: 2em 0;

      h2 {
        font-size: 1.3rem;
      }
    }
  }
</style>