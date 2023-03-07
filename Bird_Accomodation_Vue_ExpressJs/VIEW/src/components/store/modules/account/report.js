import api from '../../api'

const state = {
    report: undefined
}

const mutations = {
    SET_REPORT(state, report) {
        state.report = report
    }
}

const actions = {
    async getReport({ commit }, data) {
        // console.log(data);
        // const response = await api.get("/report/detail", data);
        // commit('SET_REPORT', response.report.reports)
    }
}

const getters = {
    getReportItem: state => state.report
}

const reportModule = {
    state,
    mutations,
    actions,
    getters
}

export default reportModule