import axios from "axios";

const state = {
	user: undefined,
	birds: [],
	bookings: [],
};

const mutations = {
	UPDATE_USER(state, payload) {
		state.user = payload;
	},
	UPDATE_BIRDS(state, payload) {
		state.birds = payload;
	},
	UPDATE_BOOKINGS(state, payload) {
		state.bookings = payload;
	},

};

const actions = {
	async login({ commit }, ac) {
		const response = await axios.post("/api/account/login", ac);
		commit("UPDATE_USER", response.data);
		console.log("after login user: ", state.user);
		if (state.user.role === 0) {    
			await this.dispatch("getAllBirds");
			console.log("after get all birds: ", state.birds);
			await this.dispatch("getAllBooking");
			console.log("after get all bookings: ", state.bookings);
		}
	},
	async logout({ commit }) {
		commit("UPDATE_USER", undefined);
		console.log("after logout user: ", state.user);
	},
	async getAllBirds({ commit }) {
		const response = await axios.get(`/api/account/${state.user.user_id}/birds`);
		commit("UPDATE_BIRDS", response.data);
	},
	async addNewBird({ commit }, bird) {
		const response = await axios.post(`/api/account/${state.user.user_id}/newBird`, bird);
		commit("UPDATE_BIRDS", response.data);
		await this.dispatch("getAllBirds");
	},
	async getAllBooking({ commit }) {
		const response = await axios.get(`/api/account/${state.user.user_id}/bookings`);
		response.data.map(async booking => {
			booking.bird_id = (await axios.get(`/api/account/${state.user.user_id}/${booking.bird_id}`)).data;
			booking.date_from = new Date(booking.date_from).toISOString().slice(0, 10);
			booking.date_to = new Date(booking.date_to).toISOString().slice(0, 10);
			booking.services = (await axios.get(`/api/account/${booking.booking_id}/services`)).data;
			// booking.reports = (await axios.get(`/api/account/${booking.booking_id}/reports`)).data;
		});
		commit("UPDATE_BOOKINGS", response.data);
	},
};

const getters = {
	getUser: state => state.user,
	getBirds: state => state.birds,
	getBookings: state => state.bookings,
};

const accountModule = {
	state,
	mutations,
	actions,
	getters
};

export default accountModule;