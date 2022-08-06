<template>
  <div class="story">
    <div class="story__thumbnail"></div>
    <div class="story__body">
      <div class="story__body-date"></div>
      <div class="story__body-title"></div>
      <div class="story__body-description"></div>
      <div class="story__body-description"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .story {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    margin-bottom: 2em;

    &__thumbnail {
      width: 100%;
      height: 180px;
      animation: content-loading 1s linear infinite alternate;
    }

    &__body {
      padding: 1em;

      &-date {
        width: 30%;
        height: 20px;
        animation: content-loading 1s linear infinite alternate;
      }

      &-title {
        width: 100%;
        height: 30px;
        margin: 1em 0;
        animation: content-loading 1s linear infinite alternate;
      }

      &-description {
        width: 100%;
        height: 20px;
        margin-bottom: .4em;
        animation: content-loading 1s linear infinite alternate;
      }

      &-description:last-child {
        width: 60%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .story {
      grid-template-columns: 1fr;

      &__body {
        padding: 1em 0;
      }
    }
  }

  @keyframes content-loading {
    0% {
      background-color: hsl(200, 20%, 95%);
    }

    100% {
      background-color: hsl(200, 20%, 70%);
    }
  }
</style>