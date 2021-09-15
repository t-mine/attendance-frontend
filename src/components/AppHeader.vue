<template>
  <header>
    <h1>Hello {{ userName }}</h1>
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
        { title: '勤務表', to: '/work-table' },
        { title: 'Page2', to: '/page2' },
      ],
    };
  },
  computed: {
    userName: function () {
      return this.$store.state.name;
    },
  },
};
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
