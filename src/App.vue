<template>
  <Loading :loading="loading" />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Loading from "./components/Loading.vue";
import { useGlobalStore } from "@/stores/Global";

export default defineComponent({
  name: "Home",
  components: {
    Loading,
  },
  setup() {
    const globalStore = useGlobalStore();
    const loading = computed(() => globalStore.loading);

    return {
      loading,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
