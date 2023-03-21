<template>
  <div>
    <div v-if='isLoading'>
      <loading-component />
    </div>
    <error-component v-if='error' :message='error' />

    <div v-if='tags' class='sidebar'>
      <h6>Popular tags</h6>
      <div class='tag-list'>
        <a
          v-for='tag in tags'
          :key='tag'
          class='tag-default tag-pill'
        >
          {{ tag }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';

export default {
  name: 'PopularTags',
  components: { ErrorComponent, LoadingComponent },
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      tags: state => state.popularTags.data,
      error: state => state.popularTags.error,
    })
  },
  mounted() {
    this.$store.dispatch('getPopularTags');
  }
}
</script>
