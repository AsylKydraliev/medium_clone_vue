<template>
  <div class='home-page'>
    <banner-component />

    <div class='container page'>
      <div class='row'>
        <div class='col-md-9'>
          <feed-toggle />
          <base-feed :apiUrl='apiUrl' />
        </div>

        <div class='col-md-3'>
          <popular-tags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseFeed from '@/components/BaseFeed.vue';
import PopularTags from '@/components/PopularTags.vue';
import BannerComponent from '@/shared/BannerComponent.vue';
import FeedToggle from '@/shared/FeedToggle.vue';

export default {
  name: 'YourFeed',
  components: { BannerComponent, PopularTags, BaseFeed, FeedToggle },
  data() {
    return {
      apiUrl: '/articles/feed'
    };
  },
};
</script>
