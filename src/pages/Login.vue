<template>
  <main class="form-signin">
    <form>
      <label for="inputEmail" class="visually-hidden">メールアドレス</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="メールアドレス"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="visually-hidden">パスワード</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="パスワード"
        required=""
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
export default {};
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
