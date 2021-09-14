<template>
  <main class="form-signin">
    <form v-on:submit.prevent="doLogin">
      <label for="inputEmail" class="visually-hidden">メールアドレス</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="メールアドレス"
        required=""
        autofocus=""
        v-model="user.email"
      />
      <label for="inputPassword" class="visually-hidden">パスワード</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="パスワード"
        required=""
        v-model="user.password"
      />
      <div class="checkbox mb-3">
        <label> <input type="checkbox" value="remember-me" /> 記憶する </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        ログイン
      </button>
    </form>
  </main>
</template>

<script>
const Axios = require('axios');
//const qs = require('qs');
let axios = Axios.create({
  //  withCredentials: true,
  //baseURL: 'http://localhost:8882',
});

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    doLogin() {
      console.log('start do login');

      axios
        .post('http://localhost:8882/api/login', {
          email: this.user.email,
          password: this.user.password,
        })
        .then((response) => {
          console.log(response.data.token);
        });

      this.$store.dispatch('auth', {
        email: this.user.email,
        password: this.user.password,
      });
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}
.form-signin {
  width: 100%;
  height: 100%;
  max-width: 330px;
  margin: auto;
  margin-top: 150px;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
