import axios from 'axios'

const state = {
    services: [],
    reviews: [],
}

const mutations = {
    UPDATE_SERVICE_ITEM(state, payload){
        state.services = payload
    },
    UPDATE_REVIEW_ITEM(state, payload){
        state.reviews = payload
    },
}

const actions = {
    async getServiceItem({ commit }) {
        const response = await axios.get('/api/services')
        commit('UPDATE_SERVICE_ITEM', response.data)
    },
    async getReviewItem({ commit }) {
        const response = await axios.get('/api/reviews')
        commit('UPDATE_REVIEW_ITEM', response.data)
    }
}

const getters = {
    serviceItems: state => state.services,
    reviewItems: state => state.reviews,
}

const baseModule = {
    state,
    mutations,
    actions,
    getters
}

export default baseModule