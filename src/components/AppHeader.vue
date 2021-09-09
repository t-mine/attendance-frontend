<template>
  <header>
    <h1>Vue Router Test</h1>
    <nav>
      <router-link v-for="list in navList" :key="list.to" :to="list.to">
        {{ list.title }}
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: 'Page1', to: '/Page1' },
        { title: 'Page2', to: '/Page2' }
      ]
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  background: gray;
  color: white;
}
h1 {
  padding: 10px;
}
nav a {
  display: inline-block;
  padding: 20px 30px;
}
</style>
