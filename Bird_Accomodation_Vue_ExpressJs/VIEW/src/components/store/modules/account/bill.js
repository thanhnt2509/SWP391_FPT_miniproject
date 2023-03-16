import api from '../../api'

const state = {
    currentBill: undefined
}

const mutations = {
    SET_CURRENT_BILL(state, payload) {
        state.currentBill = payload;
    }
}

const actions = {
    async fetchCurrentBill({ commit }, booking_id) {
        const response = await api.get(`/bill/${booking_id}`);
        if (response.status === 200) {
            console.log('data');
            console.log(response.data[0]);
            commit("SET_CURRENT_BILL", response.data[0]);
        }
    },
    async publishBill({ commit }, booking_id) {
        const response = await api.post(`/bill/${booking_id}`);
        if (response.status === 200) {
            commit("SET_CURRENT_BILL", response.data.billInfo);
        }
    },
}

const getters = {
    getCurrentBill: state => state.currentBill,
}

const billModule = {
    state,
    mutations,
    actions,
    getters
}

export default billModule