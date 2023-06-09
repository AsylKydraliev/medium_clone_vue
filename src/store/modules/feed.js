import feedApi from '@/api/feed';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

const mutations = {
  getFeedStart(state) {
    state.isLoading = true;
    state.data = null;
  },
  getFeedSuccess(state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  getFeedFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload;
  },
};

const actions = {
  getFeed(context, { apiUrl }) {
    return new Promise((resolve) => {
      context.commit('getFeedStart');
      feedApi
        .getFeed(apiUrl)
        .then((response) => {
          context.commit('getFeedSuccess', response.data);
          resolve(response.data);
        })
        .catch(() => {
          context.commit('getFeedFailure');
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
