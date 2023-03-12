import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Hompage.vue";
import Service from "../views/ServicePage.vue";
import Facilities from "../views/FacilitiesPage.vue";
import About from "../views/AboutPage.vue";
import Login from "../views/LoginPage.vue";
import Register from "../views/RegisterPage.vue";
import Booking from "../views/BookingPage.vue";
import Post from "../views/PostPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

import Profile from "../components/modules/account/Profile.vue";
import BirdList from "../components/modules/bird/BirdList.vue";
import Transaction from "../components/modules/account/Transaction.vue";
import Report from "../components/modules/report/Report.vue"
import Bill from "../components/modules/account/Bill.vue"

import ManageTransaction from "../components/modules/manager/Manage_Transaction.vue";
import ManageService from "../components/modules/manager/Manage_Service.vue";
import ManageReport from "../components/modules/manager/Manage_Report.vue";
import ManagerPage from "../components/modules/manager/ManagerPage.vue";

import store from '../components/store/index';


// guard for checking if the user is authenticated
const isAdmin = (to, from, next) => {
	const userRole = store.getters.getUser?.role;
	if (isAuth && userRole === 1) {
		// user is authenticated and has the admin role
		next();
	} else {
		// user is not authenticated or does not have the admin role
		alert("You must login to access this page")
		next('/login'); // redirect the user to the login page
	}
};
const isAuth = (to, from, next) => {
	const userRole = store.getters.getUser?.role;
	if (store.getters.getUser) {
		// user is authenticated and has the admin role
		next();
	} else {
		// user is not authenticated or does not have the admin role
		alert("You must login to access this page")
		next('/login'); // redirect the user to the login page
	}
};


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Homepage
		},
		{
			path: "/facilities",
			name: "facilities",
			component: Facilities
		},
		{
			path: "/about",
			name: "about",
			component: About
		},
		{
			path: '/:catchAll(.*)',
			component: NotFoundPage // add your own not-found component here
		},
		{
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: "/register",
			name: "register",
			component: Register
		},
		{
			path: "/booking",
			name: "booking",
			component: Booking,
			beforeEnter: isAuth
		},
		{
			path: "/post",
			name: "post",
			children: [
				{
					path: "/post",
					component: Post,
				}
			]
		},
		{
			path: "/service",
			name: "service",
			// component: () => import('../views/AboutView.vue')
			component: Service
		},
		{
			path: "/report/:booking_id",
			name: "report history",
			component: Report,
			beforeEnter: isAuth
		},
		{
			path: "/bill/:booking_id",
			name: "get bill by booking_id",
			component: Bill,
			beforeEnter: isAuth
		},
		{
			path: "/account",
			name: "account",
			beforeEnter: isAuth,
			children: [
				{
					path: "transaction",
					name: "transaction",
					component: Transaction,
				},
				{
					path: "profile",
					name: "profile",
					component: Profile
				},
				{
					path: "bird",
					name: "bird",
					children: [
						{
							path: "list",
							name: "bird-list",
							component: BirdList
						},
					]
				},
			]
		},
		{
			path: "/manager",
			name: "manager",
			beforeEnter: isAdmin,
			children: [
				{
					path: "/manager",
					name: "manager",
					component: ManagerPage,
				},
				{
					path: "report/:booking_id",
					name: "CRU report",
					component: ManageReport,
				}
			]
		}
	]
});

export default router;
