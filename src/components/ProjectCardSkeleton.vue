<template>
  <div class="project-card">
    <div class="left"></div>
    <div class="right">
      <div class="title"></div>
      <div class="first-line"></div>
      <div class="second-line"></div>
      <div class="link"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .project-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2em;
    width: 100%;
    margin-bottom: 2em;

    .left, .title, .first-line, .second-line, .link {
      animation: content-loading 1s linear infinite alternate;
    }

    .left {
      height: 200px;
    }

    .right {
      .title {
        height: 30px;
        width: 50%;
        margin-bottom: 1em;
      }

      .first-line,
      .second-line,
      .link {
        height: 20px;
        margin-bottom: .5em;
      }

      .second-line {
        width: 70%;
      }

      .link {
        margin-top: 2em;
        width: 20%;
      }
    }
  }

  @media screen and (max-width: 580px) {
    .project-card {
      grid-template-columns: 1fr;
      animation: wrapper-loading 1s linear infinite alternate;
      
      .right {
        padding: 1em;
      }
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