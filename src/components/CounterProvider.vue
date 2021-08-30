<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { CounterKey, counterStore } from "@/stores/Counter";

export default defineComponent({
  setup() {
    provide(CounterKey, counterStore());
    return {};
  },
});
</script>
