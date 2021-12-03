import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

const myCustomModule = {
    namespaced: true,
    actions,
    mutations,
    getters,
    state
}

export default myCustomModule