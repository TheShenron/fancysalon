import { legacy_createStore  } from 'redux'

import { reducer as AuthReducer } from "./AuthReducer/reducer"

const store = legacy_createStore( AuthReducer)

export { store }