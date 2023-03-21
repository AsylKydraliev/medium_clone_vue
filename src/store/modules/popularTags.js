import popularTagsApi from '@/api/popularTags';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

const mutations = {
  getPopularTagsStart(state) {
    state.isLoading = true;
    state.data = null;
  },
  getPopularTagsSuccess(state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  getPopularTagsFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload;
  },
};

const actions = {
  getPopularTags(context) {
    return new Promise((resolve) => {
      context.commit('getPopularTagsStart');
      popularTagsApi
        .getPopularTags()
        .then((tags) => {
          context.commit('getPopularTagsSuccess', tags);
          resolve(tags);
        })
        .catch(() => {
          context.commit('getPopularTagsFailure');
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
