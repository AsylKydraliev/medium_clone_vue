<template>
  <div>
    <toolbar-component />
    <router-view />
  </div>
</template>
<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';

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
