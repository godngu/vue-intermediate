import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    const str = localStorage.getItem(localStorage.key(i));
                    const obj = JSON.parse(str);
                    arr.push(obj);
                }
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch()
    },
    getters: getters,
    mutations: mutations
});
