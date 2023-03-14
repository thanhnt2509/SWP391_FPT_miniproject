import api from '../../api'
import axios from "axios";

const state = {
    report: undefined,
    new_report: {
        content: undefined,
        images: undefined
    }
}

const mutations = {
    SET_REPORT(state, report) {
        state.report = report
    },
    SET_NEW_REPORT_CONTENT(state, content) {
        state.new_report.content = content
    },
    SET_NEW_REPORT_IMAGES(state, images) {
        state.new_report.images = images
    }

}

const actions = {
    async getAllReportOfBooking_id({ commit }, booking_id) {
        const response = await api.get(`/report/${booking_id}`);
        console.log(response.data);
        commit("SET_REPORT", response.data);
    },
    async submitNewReport({ commit }, new_report) {
        let done = false;
        try {
            const response = await axios.post(`http://localhost:5000/report/newReport`, new_report, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "x-access-token": localStorage.getItem("token"),
                },
            });
            done = response.status === 200
        }catch (e) {
            console.log(e)
            done = false;
        }
        return done;
    }

}

const getters = {
    getReportItem: state => state.report,
    getNewReport: state => state.new_report,
    getNewReportContent: state => state.new_report.content,
    getNewReportImages: state => state.new_report.images
}

const reportModule = {
    state,
    mutations,
    actions,
    getters
}

export default reportModule