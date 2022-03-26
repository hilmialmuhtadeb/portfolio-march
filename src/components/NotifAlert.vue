<template>
  <div class="alert">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    status: Number
  },
  data() {
    return {
      title: 'Success',
      description: 'New message was added successfully.'  
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/_shared.scss';

  .alert {
    display: block;
    width: 30%;
    padding: 1em;
    border-radius: 1em;
    border-left: 1em solid $green;
    position: fixed;
    top: 4em;
    right: 4em;
    background-color: white;
    box-shadow: 0px 0px 32px -8px rgba(0, 0, 0, 0.4);

    h4 {
      margin-bottom: .6em;
    }
  }

  @media screen and (max-width: 1080px) {
    .alert {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    .alert {
      top: 6em;
      right: 1em;
      width: 70%;
    }
  }

</style>