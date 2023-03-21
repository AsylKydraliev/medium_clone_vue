<template>
  <div class='home-page'>
    <banner-component />
    <div class='container page'>
      <div class='row'>
        <div class='col-md-9'>
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
import BannerComponent from '@/components/BannerComponent.vue';

export default {
  name: 'GlobalFeed',
  components: { BannerComponent, PopularTags, BaseFeed },
  data() {
    return {
      apiUrl: '/articles'
    }
  }
};
</script>
