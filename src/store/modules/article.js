import articleApi from '@/api/article';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

const mutations = {
  getArticleStart(state) {
    state.isLoading = true;
    state.data = null;
  },
  getArticleSuccess(state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  getArticleFailure(state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  getArticle(context, slug) {
    return new Promise((resolve) => {
      context.commit('getArticleStart');
      articleApi
        .getArticle(slug)
        .then((response) => {
          context.commit('getArticleSuccess', response);
          resolve(response);
        })
        .catch((response) => {
          context.commit('getArticleFailure', response.response.data.errors);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
