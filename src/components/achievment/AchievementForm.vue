<template>
  <div class="achievment-form">
    <h2>Add New Achievment</h2>
    <div class="form-wrapper">
      <form-input type="text" placeholder="title" @valueChange="title = $event" />
      <textarea class="input-textarea" v-model="description" placeholder="description" />
      <form-input type="text" placeholder="date" @valueChange="date = $event" />
      <input name="isAcademichal" type="radio" value="true">
      <label>Academichal</label>
      <input name="isAcademichal" type="radio" value="false">
      <label>Non-Academichal</label>
      <button class="submit-button" @click="addAchievmentHandler">Add</button>
    </div>

    <notif-alert v-if="isAddMessageSuccess" :status="201" />
    <notif-alert v-if="isAddMessageFailed" :status="400" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import FormInput from '../shared/atom/FormInput.vue'
import NotifAlert from '../shared/atom/NotifAlert.vue'

export default {
  components: {
    FormInput,
    NotifAlert
  },
  data () {
    return {
      title: '',
      description: '',
      date: '',
      isAcademichal: true
    }
  },
  computed: {
    ...mapGetters([
      'messages',
      'isAddMessageSuccess',
      'isAddMessageFailed'
    ]),
  },
  methods: {
    ...mapActions(['addAchievment']),
    ...mapMutations([
      'setIsAddMessageSuccess',
      'setIsAddMessageFailed'
    ]),
    addAchievmentHandler () {
      this.addAchievment({
        title: this.title,
        description: this.description,
        date: this.date,
        isAcademichal: this.isAcademichal
      })

      setTimeout(async () => await this.setIsAddMessageSuccess(false), 5000)
      setTimeout(async () => await this.setIsAddMessageFailed(false), 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

  .achievment-form {
    .form-wrapper {
      margin: 1em 0;

      input[type=radio] {
        margin-right: .4em;
      }

      label {
        margin-right: 2em;
      }

      .input-textarea {
        width: 100%;
        height: 6em;
        padding: .5em;
        border: 2px solid black;
        outline: none;
        border-radius: .5em;
        margin-bottom: 1em;
        font-size: 1em;
        font-family: inherit;
        resize: none;
      }

      .input-textarea:focus {
        border: 2px solid $green;
      }

      .submit-button {
        display: block;
        margin: 2em 0;
        padding: .8em 4em;
        background-color: $green;
        color: white;
        border: 0;
        border-radius: .5em;
        outline: none;
        cursor: pointer;
        transition: .2s;
      }

      .submit-button:hover {
        background-color: darken($green, 10);
      }
    }
  }
</style>