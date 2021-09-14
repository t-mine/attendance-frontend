import { createStore } from 'vuex';

export default createStore({
  state: {
    name: '',
    email: '',
    token: '',
  },
  mutations: {
    updateUser(state, user) {
      state.name = user.name;
      state.email = user.email;
      state.token = user.token;
    },
  },
  actions: {
    auth(context, user) {
      console.log('start auth');
      // TODO emailとpasswordでログインAPIをたたいてトークンを取得
      const token = 'dummy_token';
      user.token = token;
      user.name = 'mine';
      context.commit('updateUser', user);
    },
  },
});
