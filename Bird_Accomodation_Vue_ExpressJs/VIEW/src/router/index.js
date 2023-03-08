import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Hompage.vue";
import Service from "../views/ServicePage.vue";
import Facilities from "../views/FacilitiesPage.vue";
import About from "../views/AboutPage.vue";
import Login from "../views/LoginPage.vue";
import Register from "../views/RegisterPage.vue";
import Booking from "../views/BookingPage.vue";
import Post from "../views/PostPage.vue";

import Profile from "../components/modules/account/Profile.vue";
import BirdList from "../components/modules/bird/BirdList.vue";
import Transaction from "../components/modules/account/Transaction.vue";

import Report from "../components/modules/report/Report.vue"

import Manager from "../components/modules/manager/Manage_Transaction.vue";
import ManagerService from "../components/modules/manager/Manage_Service.vue";
import ManageReport from "../components/modules/manager/Manage_Report.vue";

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
			component: Booking
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
			component: Report
		},
		{
			path: "/account",
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
				}
			]
		},
		{
			path: "/manager",
			name: "manager",
			children: [
				{
					path: "/manager",
					name: "manager",
					component: Manager,
				},
				{
					path: "service",
					name: "crud service",
					component: ManagerService
				},
				{
					path: "report",
					name: "update report on booking",
					component: ManageReport
				},
			]
		}
	]
});

export default router;
