<template>
  <div class="main-wrapper">
    <div v-if="!isAuth" class="login">
      <form-input type="text" placeholder="username" @valueChange="username = $event" />
      <form-input type="password" placeholder="password" @valueChange="password = $event" />
      <button class="submit-button" @click="loginHandler">Login</button>
    </div>
    <div v-else>
      <div class="dashboard">
        <achievment-form />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import AchievmentForm from '../components/achievment/AchievementForm.vue'
import FormInput from '../components/shared/atom/FormInput.vue'

export default {
  components: {
    FormInput,
    AchievmentForm,
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    ...mapActions(['createAuth']),
    ...mapMutations(['setAuth']),
    loginHandler() {
      const user = {
        username: this.username,
        password: this.password
      }
      this.createAuth(user)
    },
    getCookie(name) {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
      }
      else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
          end = dc.length;
        }
      }
      return decodeURI(dc.substring(begin + prefix.length, end));
    }
  },
  mounted() {
    if (this.getCookie('token')) {
      this.setAuth(true)
      return
    }
    this.setAuth(false)
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/_shared.scss';

  .main-wrapper {
    padding: 4em 0;

    .login {
      width: 40%;
   
      .submit-button {
        padding: 1em 2em;
        background-color: $green;
        color: white;
        outline: none;
        border: 0;
        border-radius: .5em;
        width: 100%;
        cursor: pointer;
        transition: .2s;
      }

      .submit-button:hover {
        background-color: darken($green, 20);
      }
    }
   }
  

  @media screen and (max-width: 768px) {
    .main-wrapper {
      padding: 2em 0;

      .login {
        width: 100%;
      }
    }
  }
</style>