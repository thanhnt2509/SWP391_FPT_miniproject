import api from "@/components/store/api";

const state = {
	// user: {
	// 	address: "somewhere",
	// 	email: "U1@gmail.com",
	// 	name: "ADMIN_CORE",
	// 	phone: "0111111111",
	// 	role: 1,
	// 	status: 1,
	// 	token: null,
	// 	user_id: 1,
	// 	user_img: null,
	// },
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
			console.log(response.data.account);
			commit("UPDATE_USER", await response.data.account[0]);
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
			// clear all state of working manager
			// if(state.user.role === 1){
			// 	this.dispatch('manager/clearState')
			// }
			commit("UPDATE_USER", undefined);
		}
	},
	async getAllBirds({ commit }) {
		const response = await api.get(`/bird`, state.user.email);
		commit("UPDATE_BIRDS", response.data.birds);
	},
	async addNewBird({ commit }, formData) {
		const response = await api.post(`/bird`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				"x-access-token": localStorage.getItem("token"),
			},
		});
		await this.dispatch("getAllBirds");
	},
	async getAllBooking({ commit }) {
		const response = await api.get(`/booking`, state.user.email);
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