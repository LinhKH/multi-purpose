import { createStore } from "vuex";

const store = createStore({
    state: {
        // variables
        token: localStorage.getItem('token') || 0
    },
    mutations: {
        // update variables value
        UPDATE_TOKEN(state, payload) {
            state.token = payload
        }
    },
    actions: {
        // action to be perpormed
        setToken(context, payload) {
            localStorage.setItem('token', payload);
            context.commit('UPDATE_TOKEN', payload);
        },
        removeToken(context) {
            localStorage.removeItem('token');
            context.commit('UPDATE_TOKEN', 0);
        }

    },
    getters: {
        // get state variable value
        getToken(state) {
            return state.token
        }

    }
});


export default store;