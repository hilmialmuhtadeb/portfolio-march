<template>
  <div class="anonymous">
    <h2>Anonymous Message</h2>
    <p>Give me a anonymous message. Your identity will not be known :D</p>
    <p>The message can be about friendship, joke, work, advice, criticism, education and anything. <strong>tell me
        anything</strong>, it's your space.</p>

    <div class="anonymous__form">
      <input type="text" v-model="newMessage">
      <button @click="addNewMessage">SEND</button>
    </div>

    <div class="anonymous__messages">
      <template v-if="isMessagesLoaded">
        <template v-if="messages.length > 0">
          <p v-for="message in messages" :key="message._id" class="text">
            {{ message.message }}
            <span>{{ message.dateCreated }}</span>
          </p>
        </template>
        <template v-else>
          <p class="empty">Be the first who send to hilmi message :p</p>
        </template>
      </template>
      <template v-else>
        <message-skeleton v-for="i in 4" :key="i" />
      </template>
    </div>

    <notif-alert v-if="isAddMessageSuccess" :status="201" />
    <notif-alert v-if="isAddMessageFailed" :status="400" />
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex'
  import MessageSkeleton from '../components/anonymous/MessageSkeleton.vue'
  import NotifAlert from '../components/shared/atom/NotifAlert.vue'

  export default {
    components: {
      MessageSkeleton,
      NotifAlert
    },
    data() {
      return {
        newMessage: ''
      }
    },
    computed: {
      ...mapGetters([
        'messages',
        'isAddMessageSuccess',
        'isAddMessageFailed'
      ]),
      isMessagesLoaded() {
        if (this.messages) {
          return true
        }
        return false
      }
    },
    methods: {
      ...mapActions([
        'getMessages',
        'addMessage'
      ]),
      ...mapMutations([
        'setIsAddMessageSuccess',
        'setIsAddMessageFailed'
      ]),
      addNewMessage: function () {
        this.addMessage(this.newMessage)
        this.newMessage = ''
        setTimeout(async () => await this.setIsAddMessageSuccess(false), 5000)
        setTimeout(async () => await this.setIsAddMessageFailed(false), 5000)
      }
    },
    created() {
      this.getMessages()
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/_shared.scss";

  .anonymous {
    padding: 4em 0;

    p {
      margin: 1em 0;
      line-height: 1.6em;
    }

    &__form {
      margin: 2em 0;
      display: grid;
      grid-template-columns: 5fr 1fr;

      input,
      button {
        padding: 1em;
      }

      input,
      input:focus {
        outline: none;
        border: 2px solid $green;
      }

      button {
        border: 0;
        background-color: $green;
        color: white;
        font-weight: bold;
        transition: .2s;
        cursor: pointer;
      }

      button:hover {
        background-color: darken($color: $green, $amount: 10);
      }
    }

    &__messages {
      p.text {
        padding: 1em 2em;
        box-shadow: $box-shadow;
        border-radius: 1em;

        span {
          display: block;
          font-size: .8em;
          color: lighten($color: $black, $amount: 50);
        }
      }

      p.empty {
        color: red;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .anonymous {
      padding: 2em 0;
    }
  }
</style>