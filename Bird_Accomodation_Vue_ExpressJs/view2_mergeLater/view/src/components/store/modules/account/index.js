import axios from 'axios'

const state = {
    user: undefined,
    birds: [],
    bookings: [],
}

const mutations = {
    UPDATE_USER(state, payload){
        state.user = payload
    },
    UPDATE_BIRDS(state, payload){
        state.birds = payload
    },
    UPDATE_BOOKINGS(state, payload){
        state.bookings = payload
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
        const response = await axios.get(`/api/account/${state.user.user_id}/birds`)
        commit('UPDATE_BIRDS', response.data)
    },
    async addNewBird({ commit }, bird) {
        const response = await axios.post(`/api/account/${state.user.user_id}/newBird`, bird)
        commit('UPDATE_BIRDS', response.data)
        await this.dispatch('getAllBirds')
    },
    async getAllBirds({ commit }) {
        const response = await axios.get(`/api/account/${state.user.user_id}/birds`)
        commit('UPDATE_BIRDS', response.data)
    },
    async getAllBooking({ commit }) {
        const response = await axios.get(`/api/account/${state.user.user_id}/bookings`)
        commit('UPDATE_BOOKINGS', response.data)
    }
}

const getters = {
    getUser: state => state.user,
    getBirds: state => state.birds,
    getBookingg: state => state.bookings,
}

const accountModule = {
    state,
    mutations,
    actions,
    getters
}

export default accountModule