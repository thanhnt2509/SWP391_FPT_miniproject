
const state = {
    report: undefined,

}

const mutations = {
    SET_REPORT(state, report) {
        state.report = report
    },

}

const actions = {
    async getReport({ commit }, data) {

    },  

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