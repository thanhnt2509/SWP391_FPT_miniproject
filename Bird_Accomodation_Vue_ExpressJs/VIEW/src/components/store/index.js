import { createStore } from 'vuex'
import base from './modules/base'
import account from './modules/account'

export default createStore({
    modules: {
        base,
        account
    }
})