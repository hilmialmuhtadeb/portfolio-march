<template>
    <input :type="type" :placeholder="placeholder" v-model="value" @keyup="typeHandler">
</template>

<script>
export default {
  props: [
    'placeholder',
    'type'
  ],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    typeHandler() {
      this.$emit('valueChange', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

  input {
    font-size: 1em;
    display: block;
    padding: .5em;
    border-radius: .5em;
    margin-bottom: 1em;
    outline: none;
    border: 2px solid black;
    width: 100%;
  }

  input:focus {
    border: 2px solid $green;
  }
  
</style>