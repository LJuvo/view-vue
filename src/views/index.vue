<template>
  <router-view></router-view>
</template>

<script>
import { appRouter } from "../router/defines";
export default {
  data() {
    return {
      menus: appRouter.children
    };
  },
  computed: {},
  methods: {
    onMenuChanged(type) {}
  }
};
</script>
<style  scoped>
</style>