import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = (prevState, action) => {
  console.log("Got action: ", action);
  const newState = { ...prevState };
  switch (action.type) {
    case "INC_COUNT":
      var counter = prevState.counters.find(x => x.key === action.key);
      prevState.counters.splice(action.key, 1);
      var counters = [
        ...prevState.counters,
        { key: action.key, count: counter.count + 1 }
      ].sort((a, b) => a.key - b.key);
      return { ...prevState, counters: counters };
    case "DEC_COUNT":
      var counter = prevState.counters.find(x => x.key === action.key);
      prevState.counters.splice(action.key, 1);
      var counters = [
        ...prevState.counters,
        { key: action.key, count: counter.count - 1 }
      ].sort((a, b) => a.key - b.key);
      return { ...prevState, counters: counters };
    case "ADD_COUNTER":
      return {
        ...prevState,
        counters: prevState.counters.concat(action.counter)
      };
    case "LOADING_ARTICLE":
      return { ...prevState, newsIsloading: action.newsIsloading };
    case "SELECT_ARTICLE":
      return { ...prevState, article: action.article };
    case "UPDATE_ARTICLE":
      return {
        ...prevState,
        documents: action.documents,
        newsLoadingIsFailed: action.newsLoadingIsFailed,
        newsIsloading: action.newsIsloading
      };
  }

  return newState;
};

const initialState = {
  documents: [],
  newsLoadingIsFailed: false,
  newsIsloading: false,
  counters: []
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(reducer, initialState, enhancer);
