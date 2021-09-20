<template>
  <main class="form-signin">
    <form v-on:submit.prevent="doLogin">
      <input type="email" class="form-control" placeholder="メールアドレス" required="" autofocus="" v-model="user.email" />
      <input type="password" class="form-control" placeholder="パスワード" required="" v-model="user.password" />
      <button class="w-100 btn btn-lg btn-primary" type="submit">ログイン</button>
    </form>
  </main>
</template>

<script>
import axios from '@/axios';
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    doLogin() {
      axios
        .post('login', this.user)
        .then((response) => {
          if (response.status === 200) {
            // vuexのユーザ情報を更新
            this.user.token = response.data.token;
            this.user.name = response.data.name;
            this.$store.dispatch('login', this.user);
            this.$router.push({ name: 'work-table' });
          } else {
            console.log(response);
          }
        })
        .catch((err) => {
          console.log('err:', err);
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
