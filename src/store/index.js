import { createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  count: 100,
  newsList: {
    articles: [],
    refreshing: true,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEWSLIST':
      state = {
        ...state,
        newsList: action.newsList
      }
      return state;
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['todos'] // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);

export default store;
