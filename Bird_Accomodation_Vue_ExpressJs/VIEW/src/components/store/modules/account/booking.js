import axios from 'axios';
import api from '../../api'

const state = {
    newBooking: {
        bird_selected_id: '',
        service_selected: [],
        date_from: '',
        date_to: '',
    },
}

const mutations = {
    UPDATE_NEW_BOOKING(state, payload) {
        state.newBooking = payload;
    },
    SET_BIRD_SELECTED(state, payload) {
        state.newBooking.bird_selected_id = payload;
    },
    SET_SERVICE_SELECTED(state, payload) {
        state.newBooking.service_selected = payload;
    },
    SET_BOOKING_DATE(state, payload) {
        state.newBooking.date_from = payload.date_from;
        state.newBooking.date_to = payload.date_to;
    }
}

const actions = {
    async createNewBooking({ commit }, booking) {
        const response = await api.post('/booking', booking);
        if (response.status === 200) {
            console.log(`Booking created successfully: ${response.data.booking_id}`);
            this.clearBooking();
        }
    },
    async setBirdSelected({ commit }, bird_id) {
        commit("SET_BIRD_SELECTED", bird_id);
        
    },
    async setServiceSelected({ commit }, service) {
        commit("SET_SERVICE_SELECTED", service);
    },
    async setBookingDate({ commit }, date) {   
        commit("SET_BOOKING_DATE", date);
    },
    clearBooking({ commit }) {
        commit("UPDATE_NEW_BOOKING", {
            bird_selected_id: '',
            service_selected: [],
            date_from: '',
            date_to: '',
        });
    },
    async checkout({ commit }, formData) {
        let done = false;
        console.log(`is checkout_img ?: ${formData.get('file')}`);
        const response = await api.post(`/booking/${formData.get('booking_id')}/checkout`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				"x-access-token": localStorage.getItem("token"),
			},
		});
        if (response.status === 200) {
            done = true;
        }else{
            done = false;
        }
        return done;
    }
}

const getters = {
    getNewBooking: state => state.newBooking,
    getNewBooking_bird: state => state.newBooking.bird_selected_id,
    getNewBooking_service: state => state.newBooking.service_selected,
    getNewBooking_date: state => ([state.newBooking.date_from, state.newBooking.date_to]),
    newBookingisOk: state => (state.newBooking.bird_selected_id != '' && state.newBooking.service_selected.length > 0 && state.newBooking.date_from != '' && state.newBooking.date_to != ''),
}


const bookingModule = {
    state,
    mutations,
    actions,
    getters
}

export default bookingModule