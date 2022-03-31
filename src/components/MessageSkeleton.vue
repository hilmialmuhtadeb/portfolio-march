<template>
  <div class="message">
    <div class="message__text"></div>
    <div class="message__date"></div>
  </div>
</template>

<style lang="scss" scoped>
  .message {
    padding: 1em 2em;
    width: 100%;
    border-radius: 1em;
    animation: wrapper-loading 1s linear infinite alternate;
    margin-bottom: 1em;

    &__text {
      height: 20px;
      border-radius: .4em;
      width: 80%;
      margin-bottom: .5em;
      animation: content-loading 1s linear infinite alternate;
    }

    &__date {
      border-radius: .4em;
      height: 10px;
      width: 30%;
      animation: content-loading 1s linear infinite alternate;
    }
    
  }

  @keyframes wrapper-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
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