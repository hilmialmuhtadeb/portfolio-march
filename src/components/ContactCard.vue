<template>
  <a :href="contact.url">
    <div class="contact-card">
        <font-awesome-icon :icon="contact.icon" />
        <p>{{ contact.title }}</p>
    </div>
  </a>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faMedium, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(
  faGithub,
  faLinkedin,
  faMedium,
  faInstagram,
  faWhatsapp,
  faEnvelope
)

export default {
  name: 'ContactCard',
  props: {
    contact: {
      type: Object,
      default: null
    }
  },
  components: {
    FontAwesomeIcon,
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/_shared.scss';

  a {
    color: $black;
    text-decoration: none;

    .contact-card {
      padding: 1em;
      border-radius: 1rem;
      text-align: center;
      font-size: 2rem;
      box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.05);
      transition: .2s;

      &:hover {
        box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.1);
        color: $green;
      }

      p {
        font-size: 1rem;
        margin-top: .5em;
      }
    }
  }

  @media screen and (max-width: 768px) {
    a {
      .contact-card {
        padding: 1em .4em;
        font-size: 1.2em;
      }
    }
  }
</style>