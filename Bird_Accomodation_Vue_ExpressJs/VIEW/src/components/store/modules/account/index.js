import api from "@/components/store/api";

const state = {
	user: undefined,
	birds: [
		{
			bird_id: 1,
			type_name: 'Parrot',
			age: 2,
			bird_name: 'RaeKyo',
			breed: 'Indian Ringneck',
			gender: 0,
			image: 'death.jpg',
			description: 'none',
			boarding: true
		},
		{
			bird_id: 2,
			type_name: 'Parrot',
			age: 4,
			bird_name: 'RaeKyo2',
			breed: 'African Grey',
			gender: 1,
			image: 'death.jpg',
			description: 'none',
			boarding: false
		},
	],
	bookings: [],
};

const mutations = {
	UPDATE_USER(state, payload) {
		state.user = payload;
	},
	// UPDATE_BIRDS(state, payload) {
	// 	state.birds = payload;
	// },
	// UPDATE_BOOKINGS(state, payload) {
	// 	state.bookings = payload;
	// },

};

const actions = {
	async login({ commit }, ac) {
		const response = await api.post("/auth/login", ac)
		if (response) {
			const data = response.data
			localStorage.setItem("token", data.token)
			commit("UPDATE_USER", response.data.account[0]);
			console.log("after login user: ", state.user);
		}
		// a user login
		// if (state.user.role === 0) {
		// 	await this.dispatch("getAllBirds");
		// 	console.log("after get all birds: ", state.birds);
		// 	await this.dispatch("getAllBooking");
		// 	console.log("after get all bookings: ", state.bookings);
		// }
	},
	async logout({ commit }) {
		if (state.user) {
			localStorage.removeItem("token")
			commit("UPDATE_USER", undefined);
		}
	},
	// async getAllBirds({ commit }) {
	// 	const response = await api.get(`/api/account/${state.user.user_id}/birds`);
	// 	commit("UPDATE_BIRDS", response.data);
	// },
	// async addNewBird({ commit }, bird) {
	// 	const response = await api.post(`/api/account/${state.user.user_id}/newBird`, bird);
	// 	commit("UPDATE_BIRDS", response.data);
	// 	await this.dispatch("getAllBirds");
	// },
	// async getAllBooking({ commit }) {
	// 	const response = await api.get(`/api/account/${state.user.user_id}/bookings`);
	// 	response.data.map(async booking => {
	// 		booking.bird_id = (await api.get(`/api/account/${state.user.user_id}/${booking.bird_id}`)).data;
	// 		booking.date_from = new Date(booking.date_from).toISOString().slice(0, 10);
	// 		booking.date_to = new Date(booking.date_to).toISOString().slice(0, 10);
	// 		booking.services = (await api.get(`/api/account/${booking.booking_id}/services`)).data;
	// 		// booking.reports = (await axios.get(`/api/account/${booking.booking_id}/reports`)).data;
	// 	});
	// 	commit("UPDATE_BOOKINGS", response.data);
	// },
};

const getters = {
	getUser: state => state.user,
	getBirds: state => state.birds,
	// getBookings: state => state.bookings,
};

const accountModule = {
	state,
	mutations,
	actions,
	getters
};

export default accountModule;