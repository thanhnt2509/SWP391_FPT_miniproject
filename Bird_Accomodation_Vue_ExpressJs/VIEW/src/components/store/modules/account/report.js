import api from '../../api'

const state = {
    report: undefined,
    newReport: [],
    onEditReport: false,
}

const mutations = {
    SET_REPORT(state, report) {
        state.report = report
    },
    SET_NEW_REPORT(state, newReport) {
        state.newReport = newReport
    },
    SET_ON_EDIT_REPORT(state, onEditReport) {
        state.onEditReport = onEditReport
    }
}

const actions = {
    async getReport({ commit }, data) {
        console.log(data);
        const response = await api.patch("/report/detail", data);
        console.log(response.data.reports);
        commit('SET_REPORT', response.data.reports)
        // // set new report with empty data
        const allServiceRegistered = await api.get(`/booking/${data.booking_id}/services`);
        allServiceRegistered.data.services.map((service) => {
            service.report_text = ''
            service.report_image = ''
            return service
        })
        commit('SET_NEW_REPORT', allServiceRegistered.data.services)
        // if (response.data.reports?.reportDetails?.length === 0){
        // }
    },
    async updateNewReport({ commit }, data) {
        commit('SET_NEW_REPORT', data)
    },
    async publishNewReport({ commit }, booking_id) {
        const services = state.newReport.map(service => ({
            service_id: service.service_id,
            report_text: service.report_text,
            report_image: service.report_image
        }))
        const reportPublish = {
            booking_id: booking_id,
            services: state.newReport
        }
        const response = await api.post("/report/newReport", reportPublish);
        console.log(response.data);
        // commit('SET_REPORT', response.data)
    },
    swtichEditReport({ commit }) {
        commit('SET_ON_EDIT_REPORT', !state.onEditReport)
    }
}

const getters = {
    getReportItem: state => state.report,
    getReportDetail: state => state.report?.reportDetails,
    getNewReport: state => state.newReport,
    getOnEditReport: state => state.onEditReport,
}

const reportModule = {
    state,
    mutations,
    actions,
    getters
}

export default reportModule