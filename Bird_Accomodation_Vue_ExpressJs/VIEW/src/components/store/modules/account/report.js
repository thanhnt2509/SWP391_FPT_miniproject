import api from '../../api'

const state = {
    report: undefined,

}

const mutations = {
    SET_REPORT(state, report) {
        state.report = report
    },

}

const actions = {
    async getAllReportOfBooking_id({ commit }, booking_id) {
        const response = await api.get(`/report/${booking_id}`);
        console.log(response.data);
        commit("SET_REPORT", response.data);
    }

}

const getters = {
    getReportItem: state => state.report,

}

const reportModule = {
    state,
    mutations,
    actions,
    getters
}

export default reportModule