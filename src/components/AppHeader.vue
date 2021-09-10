<template>
  <header>
    <h1>Hello {{ user }}</h1>
    <button type="button" class="btn btn-primary">Primary</button>

    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

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
        { title: 'Page1', to: '/page1' },
        { title: 'Page2', to: '/page2' },
      ],
      user: this.$store.state.user,
    };
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
