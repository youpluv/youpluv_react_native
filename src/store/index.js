import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./user/user.reducer";
import { AsyncStorage } from "react-native";
import weatherReducer from "./weather/weather.reducer"
import newsReducer from './news/news.reducer'

const persistConfig = {
  //...
  key: "root",
  storage: AsyncStorage
};

// Note: this API requires redux@>=3.1.0
const rootReducer = combineReducers({
  user: userReducer,
  weather: weatherReducer,
  news: newsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
let persistor = persistStore(store);

export { store, persistor };
