import axios from "axios";
import api from "@/components/store/api";

const state = {
	services: [],
	highlightedServices: [],
	reviews: [],
	birdType: [],
	posts: [],
	bookingState : [
		{state: 'Pending', color: 'yellow'},
		{state: 'Approved', color: 'green'},
		{state: 'On-going', color: 'blue'},
		{state: 'Completed', color: 'purple'},
		{state: 'Canceled', color: 'red'},
	]
};

const mutations = {
	UPDATE_SERVICE_ITEM(state, payload){
		state.services = payload;
	},
	UPDATE_REVIEW_ITEM(state, payload){
		state.reviews = payload;
	},
	UPDATE_BIRD_TYPE_ITEM(state, payload){
		state.birdType = payload;
	},
	UPDATE_POST_ITEM(state, payload){
		state.posts = payload;
	},
	UPDATE_HIGH_LIGHTED_SERVICE_ITEM(state, payload){
		state.highlightedServices = payload;
	}
};

const actions = {
	async getServiceItem({ commit }) {
		const response = await api.get("/service");
		commit("UPDATE_SERVICE_ITEM", response.data.services);
	},
	async getReviewItem({ commit }) {
		const response = await axios.get("/api/review");
		commit("UPDATE_REVIEW_ITEM", response.data);
	},
	async getBirdTypeItem({ commit }) {
		const response = await api.get("/bird/type");
		commit("UPDATE_BIRD_TYPE_ITEM", response.data.bird_types);
	},
	async getPostItem({ commit }){
		const response = await api.get("/post");
		commit("UPDATE_POST_ITEM", response.data.posts);
	},
	async getHighLightedServiceItem({ commit }){
		const response = await api.get("/service/highlight");
		console.log(response.data.services);
		commit("UPDATE_HIGH_LIGHTED_SERVICE_ITEM", response.data.services);	
	},
};

const getters = {
	serviceItems: state => state.services,
	reviewItems: state => state.reviews,
	birdTypeItems: state => state.birdType,
	postItems: state => state.posts,
	bookingStateItems: state => state.bookingState,
	highlightedServiceItems: state => state.highlightedServices
	
};

const baseModule = {
	state,
	mutations,
	actions,
	getters
};

export default baseModule;