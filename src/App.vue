<template>
  <div>
    <toolbar-component />
    <router-view />
  </div>
</template>
<script>
import ToolbarComponent from '@/shared/ToolbarComponent.vue';

export default {
  name: 'App',
  components: {
    ToolbarComponent,
  },
  mounted() {
    this.$store.dispatch('getCurrentUser');
  }
}
</script>
