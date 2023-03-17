import api from '../../api'
import axios from "axios";

const state = {
    bookingServices: [],
    report: undefined,
    new_report: {
        content: undefined,
        images: undefined,
        updateList: [],
    },
    newReportFeedback: '',
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
    },
    SET_NEW_REPORT_UPDATE_LIST(state, updateList) {
        state.new_report.updateList = updateList
    },
    SET_BOOKING_SERVICE(state, bookingServices) {
        state.bookingServices = bookingServices
    },
    SET_NEW_REPORT_FEEDBACK(state, feedback) {
        state.newReportFeedback = feedback
    }
}

const actions = {
    async getAllReportOfBooking_id({ commit }, booking_id) {
        const response = await api.get(`/report/${booking_id}`);
        console.log(`all report of booking ${booking_id}: ${response.data}`);
        commit("SET_REPORT", response.data);
    },
    async getAllServiceOfBooking_id({ commit }, booking_id) {
        const response = await api.get(`/booking/${booking_id}/services`);
        console.log(`all service of booking ${booking_id}: ${response.data}`);
        commit("SET_BOOKING_SERVICE", response.data.services);
    },
    async submitNewReport({ commit }, payload) {
        let done = false;
        try {
            // upload text and images to server
            const response = await axios.post(`http://localhost:5000/report/newReport`, payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "x-access-token": localStorage.getItem("token"),
                },
            });

            done = response.status === 200;
        } catch (e) {
            console.log(e)
            done = false;
        }
        return done;
    },
    async submitNewReportUpdateList({ commit }, payload) {
        let done = false
        try {
            // console.log(payload);
            console.log(`booking_id: ${payload.booking_id}`);
            console.log(`updateList: ${payload.updateList}`);
            // upload update list to server
            const reponseUpload = await axios.post(`http://localhost:5000/report/newReport/updateReportList`, {
                booking_id: payload.booking_id,
                date: payload.date,
                updateList: payload.updateList,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem("token"),
                },
            });
            done = reponseUpload.status === 200;
        } catch (error) {
            console.log(error)
            done = false;
        }
        return done
    },
    async submitNewReportFeedback({ commit }, payload) {
        let done = false
        try {
            const response = await axios.post(`http://localhost:5000/report/updateFeedback/${payload.dreport_id}`, 
            payload, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem("token"),
                },
            }); 
            done = response.status === 201;
        } catch (error) {
            console.log(error);
        }

        return done;
    },
    clearNewReport({ commit }) {
        commit("SET_NEW_REPORT_CONTENT", undefined);
        commit("SET_NEW_REPORT_IMAGES", undefined);
        commit("SET_NEW_REPORT_UPDATE_LIST", []);
        commit("SET_BOOKING_SERVICE", [])
    },
    clearNewReportFeedback({ commit }) {
        commit("SET_NEW_REPORT_FEEDBACK", undefined);
    }
}

const getters = {
    getReportItem: state => state.report,
    getNewReport: state => state.new_report,
    getNewReportContent: state => state.new_report.content,
    getNewReportImages: state => state.new_report.images,
    getNewReportUpdateList: state => state.new_report.updateList,
    getBookingServices: state => state.bookingServices,
    getNewReportFeedback: state => state.newReportFeedback,
}

const reportModule = {
    state,
    mutations,
    actions,
    getters
}

export default reportModule