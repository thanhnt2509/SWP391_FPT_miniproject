import axios from "axios";
import api from "@/components/store/api";

const state = {
	allServices: [],
	allUsers: [],
	// allBirds: [],
	allBookings: [],
	allPosts: [],
	// allReviews: [],
};

const mutations = {
	UPDATE_SERVICE_ITEM(state, payload){
		state.allServices = payload;
	},
	UPDATE_USER_ITEM(state, payload){
		state.allUsers = payload;
	},
	// UPDATE_BIRD_ITEM(state, payload){
	// 	state.allBirds = payload;
	// },
	UPDATE_BOOKING_ITEM(state, payload){
		state.allBookings = payload;
	},
	UPDATE_POST_ITEM(state, payload){
		state.allPosts = payload;
	}
};

const actions = {
	async getAllServices({ commit }) {
		const response = await api.get("/service");
		commit("UPDATE_SERVICE_ITEM", response.data.services);
	},
	async getAllUsers({ commit }) {
		const response = await api.get("/account");
		commit("UPDATE_USER_ITEM", response.data.accounts);
	},
	async getAllPosts({ commit }) {
		const response = await api.get("/post");
		commit("UPDATE_POST_ITEM", response.data.posts);
	},
	// async getAllBirds({ commit }) {
	// 	const response = await api.get("/bird");
	// 	commit("UPDATE_BIRD_ITEM", response.data.birds);
	// },
	async getAllBookings({ commit }) {
		const response = await api.get("/booking");
		commit("UPDATE_BOOKING_ITEM", response.data.bookings);
	},
	async approveBooking({ commit }, booking_id) {
		const response = await api.put(`/booking/${booking_id}/approve`);
		await this.dispatch("getAllBookings");
	},
	async rejectBooking({ commit }, booking_id) {
		console.log(`rejecting booking ${booking_id}`);
		const response = await api.put(`/booking/${booking_id}/cancel`);
		await this.dispatch("getAllBookings");
	},
	async checkin_Booking({ commit }, booking_id) {
		const response = await api.put(`/booking/${booking_id}/check_in`);
		await this.dispatch("getAllBookings");
	},
	async checkout_Booking({ commit }, booking_id) {
		const response = await api.put(`/booking/${booking_id}/check_out`);
		await this.dispatch("getAllBookings");
	},
	async changeAccountStatus({ commit }, { user_id, status }) {
		const response = await api.patch(`/account/${user_id}`, { currentStatus: status });
		await this.dispatch("getAllUsers");
	},
	clearState({ commit }) {
		commit("UPDATE_SERVICE_ITEM", []);
		commit("UPDATE_USER_ITEM", []);
		// commit("UPDATE_BIRD_ITEM", []);
		commit("UPDATE_BOOKING_ITEM", []);
	}
	// async completeBooking({ commit }, booking_id) {
	// 	const response = await api.put(`/booking/${booking_id}/complete`);
	// 	await this.dispatch("getAllBookings");
	// },
};

const getters = {
	allServiceItems: state => state.allServices,
	allUserItems: state => state.allUsers,
	// allBirdItems: state => state.allBirds,
	allBookingItems: state => state.allBookings,
	allBookingItems_pending: state => state.allBookings.filter(booking => booking.status == 0),
	allBookingItems_approved: state => state.allBookings.filter(booking => booking.status == 1),
	allBookingItems_ongoing: state => state.allBookings.filter(booking => booking.status == 2),
	allBookingItems_completed: state => state.allBookings.filter(booking => booking.status == 3),
	allBookingItems_canceled: state => state.allBookings.filter(booking => booking.status == 4),
	allPostItems: state => state.allPosts,
	// allBookingItems_date: (state, payload) => state.allBookings.filter(booking => new Date(booking.date_from).getTime() >= new Date(payload[0]).getTime()
	// 													&& new Date(booking.date_to).getTime() <= new Date(payload[1]).getTime()),

};

const accountModule = {
	state,
	mutations,
	actions,
	getters
};

export default accountModule;
