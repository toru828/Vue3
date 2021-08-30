<template>
  <button @click="increment" class="cal-btn">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/Counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();

    return {
      increment: store.asyncIncrement,
    };
  },
});
</script>
