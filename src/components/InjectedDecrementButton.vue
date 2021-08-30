<template>
  <button @click="decrement" class="cal-btn">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/Counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();

    return {
      decrement: store.asyncDecrement,
    };
  },
});
</script>
