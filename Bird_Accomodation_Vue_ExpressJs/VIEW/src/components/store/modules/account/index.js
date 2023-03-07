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
	UPDATE_BIRDS(state, payload) {
		state.birds = payload;
	},
	UPDATE_BOOKINGS(state, payload) {
		state.bookings = payload;
	},

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
		if (state.user.role === 0) {
			await this.dispatch("getAllBirds");
			console.log("after get all birds: ", state.birds);
			await this.dispatch("getAllBooking");
			console.log("after get all bookings: ", state.bookings);
		}
	},
	async logout({ commit }) {
		if (state.user) {
			localStorage.removeItem("token")
			commit("UPDATE_USER", undefined);
			// clear all state of working manager
			if(state.user.role === 1){
				dispatch('manager/clearState')
			}
		}
	},
	async getAllBirds({ commit }) {
		const response = await api.get(`/bird`, state.user.email);
		commit("UPDATE_BIRDS", response.data.birds);
	},
	async addNewBird({ commit }, bird) {
		const response = await api.post(`/bird`, bird);
		await this.dispatch("getAllBirds");
	},
	async getAllBooking({ commit }) {
		const response = await api.get(`/booking`,state.user.email);
		commit("UPDATE_BOOKINGS", response.data.bookings);
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