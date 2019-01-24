import axios from "axios";

export const incCount = key => {
  return {
    type: "INC_COUNT",
    key: key
  };
};

export const decCount = key => {
  return {
    type: "DEC_COUNT",
    key: key
  };
};

export const addCounter = key => {
  return {
    type: "ADD_COUNTER",
    counter: { key: key, count: 0 }
  };
};

export const selectArticle = article => {
  return {
    type: "SELECT_ARTICLE",
    article
  };
};

export const updateArticle = () => dispatch => {
  dispatch({
    type: "LOADING_ARTICLE",
    newsIsloading: true
  });
  axios
    .get(
      "https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24"
    )
    .then(response => {
      dispatch({
        type: "UPDATE_ARTICLE",
        documents: Object.values(response.data.documents) || [],
        newsLoadingIsFailed: false,
        newsIsloading: false
      });
    })
    .catch(e => {
      dispatch({
        type: "UPDATE_ARTICLE",
        documents: [],
        newsLoadingIsFailed: true,
        newsIsloading: false
      });
    });
};
