<template>
  <div>
    <div v-if='isLoading'>
      <loading-component />
    </div>

    <error-component v-if='error' :message='error' />

    <div v-if='feed'>
      <div class='article-preview' v-for='(article, index) in feed.articles' :key='index'>
        <div class='article-meta'>
          <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
            <img :src='article.author.image' :alt='article.author.username' />
          </router-link>

          <div class='info'>
            <router-link
              :to="{name: 'userProfile', params: {slug: article.author.username}}"
              class='author'
            >
              {{ article.author.username }}
            </router-link>
            <span class='date'>{{ article.createdAt }}</span>
          </div>

          <div class='pull-xs-right'>
            ADD TO FAVORITE
          </div>
        </div>

        <router-link :to="{name: 'article', params: {slug: article.slug}}" class='preview-link'>
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          TAG LIST
        </router-link>
      </div>
      <base-pagination
        :total='feed.articlesCount'
        :limit='limit'
        :current-page='currentPage'
        :url='baseUrl'
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BasePagination from '@/components/BasePagination.vue';
import { stringify, parseUrl } from 'query-string';
import { limit } from '@/helpers/vars';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';

export default {
  name: 'BaseFeed',
  components: { ErrorComponent, LoadingComponent, BasePagination },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      limit,
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    }),

    currentPage() {
      return Number(this.$route.query.page || '1');
    },

    baseUrl() {
      return this.$route.path;
    },

    offset() {
      return this.currentPage * limit - limit;
    }
  },
  watch: {
    currentPage() {
      this.fetchFeeds();
    }
  },
  mounted() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      const parsedUrl = parseUrl(this.apiUrl);
      const stringifyParams = stringify({
        limit,
        offset: this.offset,
        ...parsedUrl.query,
      });

      const apiUrlWithParams = `${parsedUrl.url}?${stringifyParams}`;
      this.$store.dispatch('getFeed', { apiUrl: apiUrlWithParams });
    }
  }
};
</script>
