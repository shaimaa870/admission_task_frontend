import { userService } from '../_services';
import router  from '../router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };
const getters={
    status:state=>state.status
}
const actions = {
 async   login({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username });
      await  userService.login(username, password)
            .then(
                user => {
                    debugger
                    commit('loginSuccess', user);
                    router.go('/');

                },
                error => {
                 
                    commit('loginFailure', error);
                    toast.error(error?.errorMessage, {
                        autoClose: 3000,
                      });
                }
            );
    },
    
    logout({ commit }) {
        userService.logout();
        commit('logout');
        router.go('/login');
    },
   async register({ dispatch, commit }, user) {
        commit('registerRequest', user);
    
      await  userService.register(user)
            .then(
                user => {
                    debugger
                    commit('registerSuccess', user);
                    router.push('/login');
                    toast.success('Successful Registration', {
                        autoClose: 3000,
                      });
                },
                error => {
                    commit('registerFailure', error);
                    // toast.error(data?.errorMessage, {
                    //     autoClose: 3000,
                    //   });
                }
            );
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state, user) {
        state.status = { registering: true };
    },
    registerSuccess(state, user) {
        state.status = {};
    },
    registerFailure(state, error) {
        state.status = {};
    }
};

export const auth = {
    namespaced: true,
    state,
    actions,
    mutations
}