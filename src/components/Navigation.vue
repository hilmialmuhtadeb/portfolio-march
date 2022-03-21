<template>
  <nav>
    <h1 class="logo">
      <router-link to="/">HILMI ALMUHTADE</router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link to="/projects">PROJECTS</router-link>
      </li>
      <li>
        <router-link to="/stories">STORIES</router-link>
      </li>
      <li>
        <router-link to="/achievments">ACHIEVMENTS</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/_shared.scss';

nav {
  display: grid;
  padding: 2em 8em;

  .logo a::after {
    content: "";
    background-color: #42b983;
    width: 8%;
    display: block;
    height: 6px;
    border-radius: 1em;
    margin: .4em 0 1.2em;
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

    li {
      padding-right: 2em;
    }
    
    a.router-link-exact-active {
      color: $green;
    }
  }

}
</style>