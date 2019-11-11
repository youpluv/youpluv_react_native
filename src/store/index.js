import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/user.reducer';

// Note: this API requires redux@>=3.1.0
const rootReducer = combineReducers({
    user: userReducer
})

const middleware = [thunk];
  const composeEnhancers =
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default store = createStore(rootReducer, {}, enhancer);