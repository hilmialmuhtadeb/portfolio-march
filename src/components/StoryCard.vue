<template>
  <a :href="story.link">
    <div class="story">
      <div class="story__thumbnail">
        <img :src="story.thumbnail" :alt="story.title">
      </div>
      <div class="story__body">
        <p class="date">
          {{ date }} - {{ time }}
        </p>
        <h2 class="story__title">
          {{ story.title }}
        </h2>
        <p class="description">
          {{ description }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    story: Object
  },
  data() {
    return {
      description: '',
      date: '',
      time: ''
    }
  },
  methods: {
    descriptionBuilder() {
      const descriptionSplitted = this.story.description.split('<p>')
      const description = descriptionSplitted[1]
      this.description = description.split(' ').slice(0, 15).join(' ') + ' ...'
    },
    dateTimeBuilder() {
      const pubDateSplitted = this.story.pubDate.split(' ')
      const dateSplitted = pubDateSplitted[0].split('-')
      const date = dateSplitted[2]
      const month = this.getMonthName(dateSplitted[1] * 1)
      const year = dateSplitted[0]
      const time = pubDateSplitted[1].split(':').slice(0, 2).join('.')

      this.date = `${date} ${month} ${year}`
      this.time = time
    },
    getMonthName(month) {
      const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

      return months[month]
    }
  },
  mounted() {
    this.descriptionBuilder()
    this.dateTimeBuilder()
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: unset;
    text-decoration: unset;
  }

  a:hover .story {
    box-shadow: 0px 0px 24px -8px rgba(0, 0, 0, 0.2);
  }

  .story {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid grey;
    transition: .2s;

    &__thumbnail {
      img {
        width: 100%;
        height: 12em;
        object-fit: cover;
      }
    }

    &__body {
      padding: 1em;

      h2 {
        text-decoration: underline;
      }
      
      p.description {
        margin: 1em 0;
      }
      
      p.date {
        color: lighten(black, 60);
        font-size: .8em;
        margin-bottom: 1em;
      }
    }

  }
  
  @media screen and (max-width: 768px) {
    .story {
      grid-template-columns: 1fr;
    }
  }
</style>