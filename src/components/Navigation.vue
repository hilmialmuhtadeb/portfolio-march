<template>
  <nav>
    <h1 class="logo">
      <router-link to="/">HILMI ALMUHTADE</router-link>
    </h1>
    <div class="hamburger" @click="navClick">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul :class="[{active: isNavbarShow}]">
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link to="/projects">PROJECTS</router-link>
      </li>
      <li>
        <router-link to="/achievments">ACHIEVMENTS</router-link>
      </li>
      <li>
        <router-link to="/stories">STORIES</router-link>
      </li>
      <li>
        <router-link to="/anonymous">ANONYMOUS</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        isNavbarShow: false
      }
    },
    methods: {
      navClick () {
        return this.isNavbarShow = !this.isNavbarShow
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/_shared.scss';

  nav {
    display: grid;

    .hamburger {
      display: none;
    }

    .logo a::after {
      content: "";
      background-color: #42b983;
      width: 8%;
      display: block;
      height: 6px;
      border-radius: 1em;
      margin: .4em 0;
    }

    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      transition: .2s;
    }

    a:hover {
      color: rgba(66, 185, 131, 0.3);
    }

    ul {
      display: flex;
      list-style: none;
      margin-top: 1em;

      li {
        padding-right: 2em;
      }

      a.router-link-exact-active {
        color: $green;
      }
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      grid-template-columns: 1fr 1fr;
      position: relative;
      align-items: center;

      .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 24px;
        justify-self: end;
        box-sizing: content-box;
        padding: 8px 12px;
        border: 2px solid rgba(44, 62, 80, 0.2);
        border-radius: 8px;
        
        span {
          display: block;
          height: 4px;
          width: 24px;
          background-color: $black;
          border-radius: 4px;
        }
      }

      .logo a::after {
        width: 24%;
      }

      ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        top: 4em;
        left: -100vw;
        transition: .3s;
        
        li {
          padding: 2em 1em;
          text-align: center;
          background-color: #2c3e50;
          margin-top: -.4em;

          a {
            color: white;
          }
        }
      }

      ul.active {
        left: 0;
      }
    }
  }
</style>