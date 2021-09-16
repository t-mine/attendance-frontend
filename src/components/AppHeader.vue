<template>
  <nav class="navbar navbar-dark bg-dark">
    <a href="#" class="navbar-brand">勤怠管理システム</a>
    <div v-if="loggedIn" class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">menu</button>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" v-on:click="doLogout">logout</a></li>
      </ul>
    </div>
  </nav>
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
    loggedIn: function () {
      return this.$store.state.token;
    },
  },
  methods: {
    doLogout() {
      this.$store.dispatch('logout', this.user);
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style>
nav {
  padding-left: 20px;
}
.dropdown {
  width: 100px;
  margin-left: auto;
}
</style>
