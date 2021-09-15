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
    login(context, user) {
      context.commit('updateUser', user);
    },
    logout(context) {
      context.commit('updateUser', {});
    },
  },
});
