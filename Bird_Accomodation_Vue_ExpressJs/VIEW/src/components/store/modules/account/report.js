import api from '../../api'

const state = {
    report: undefined,
    newReport: []
    // {
    //     booking_id: '',
    //     service_report_text: '',
    //     service_report_image: '',
    // },
}

const mutations = {
    SET_REPORT(state, report) {
        state.report = report
    },
    SET_NEW_REPORT(state, newReport) {
        state.newReport = newReport
    }
}

const actions = {
    async getReport({ commit }, data) {
        const response = await api.patch("/report/detail", data);
        commit('SET_REPORT', response.data.reports)
        // set new report with empty data
        commit('SET_NEW_REPORT', [...response.data.reports?.reportDetails[0].services])
    }
}

const getters = {
    getReportItem: state => state.report,
    getReportDetail: state => state.report?.reportDetails,
    getNewReport: state => state.newReport,
}

const reportModule = {
    state,
    mutations,
    actions,
    getters
}

export default reportModule