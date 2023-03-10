import { createStore } from "vuex";
import base from "./modules/base";
import account from "./modules/account/index";
import booking from "./modules/account/booking";
import report from "./modules/account/report";
import bill from "./modules/account/bill";
import manager from "./modules/manager";

export default createStore({
	modules: {
		base,
		account,
		booking,
		report,
		bill,
		manager
	}
});