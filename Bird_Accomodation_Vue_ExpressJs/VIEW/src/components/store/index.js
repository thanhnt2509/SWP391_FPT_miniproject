import { createStore } from "vuex";
import base from "./modules/base";
import account from "./modules/account";
import manager from "./modules/manager";

export default createStore({
	modules: {
		base,
		account,
		manager
	}
});