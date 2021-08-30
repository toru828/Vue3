<template>
  <span class="count">
    {{ count }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useCounterStore } from "@/stores/Counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();
    const count = computed(() => store.count);

    return {
      count,
    };
  },
});
</script>
