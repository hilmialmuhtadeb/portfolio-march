<template>
  <div class="home">
    <div class="profile">
      <div class="profile__pitch">
        <h2>Halo Guys, Hilmi here 👋 </h2>
        <p>I am a student majoring in informatics engineering. I am into web development since 2020 and I am interested in the development of technology in it. Besides that I also like to explore the beauty of nature with my friends and share ideas with them.</p>
        <p>Currently, I'm doing an internship program as a <strong>Software Engineer</strong> at <a target="_blank" href="https://www.blibli.com/">blibli.com</a>.</p>
      </div>
      <div class="profile__picture">
        <img src="../assets/hilmi.png" alt="Hilmi Almuhtade">
      </div>
    </div>
    <div class="contact">
      <div v-for="contact in contacts" :key="contact.title">
        <contact-card :contact="contact"/>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from '../components/ContactCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ContactCard
  },
  methods: {
    ...mapActions(['getContacts']),
  },
  computed: {
    ...mapGetters(['contacts'])
  },
  created() {
    this.getContacts()
  }
}
</script>

<style lang="scss">
  @import '../assets/_shared.scss';

  .home {
    padding: 2em 8em;

    .profile {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 2em;

      &__pitch {
        padding: 2em;
        background-color: rgba(66, 185, 131, 0.1);
        box-shadow: $box-shadow;
        border-radius: 1em;

        h2 {
          font-weight: 600;
          margin-bottom: 1em;
        }

        p {
          line-height: 1.6em;
        }
        
        p:last-child {
          margin-top: 1.6em;
        }
      }

      &__picture {
        img {
          width: 100%;
          border-radius: 1em;
          box-shadow: $box-shadow;
        }
      }
    }

    .contact {
      margin-top: 4em;
      display: grid;
      gap: 1em;
      grid-template-columns: repeat(6, 1fr);
    }
  }
</style>