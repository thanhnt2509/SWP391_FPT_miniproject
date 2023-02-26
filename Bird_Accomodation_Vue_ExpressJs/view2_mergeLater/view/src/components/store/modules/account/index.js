import axios from 'axios'

const state = {
    user: undefined,
    birds: []
}

const mutations = {
    UPDATE_USER(state, payload){
        state.user = payload
    },
    UPDATE_BIRDS(state, payload){
        state.birds = payload
    }
}

const actions = {
    async login({ commit }, ac) {
        const response = await axios.post('/api/account/login', ac)
        commit('UPDATE_USER', response.data)
        console.log('after login user: ', state.user);
        await this.dispatch('getAllBirds')
        console.log('after get all birds: ', state.birds);
    },
    async logout({ commit }) {
        commit('UPDATE_USER', undefined)
        console.log('after logout user: ', state.user);
    },
    async getAllBirds({ commit }) {
        const response = await axios.get(`/api/account/2/birds`)
        commit('UPDATE_BIRDS', response.data)
    }
}

const getters = {
    getUser: state => state.user,
    getBirds: state => state.birds,
}

const accountModule = {
    state,
    mutations,
    actions,
    getters
}

export default accountModule