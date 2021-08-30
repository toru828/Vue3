<template>
  <CounterProvider>
    <InjectedDecrementButton />
    <InjectedCounterDisplay />
    <InjectedIncrementButton />
  </CounterProvider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CounterProvider from "@/components/CounterProvider.vue";
import InjectedCounterDisplay from "@/components/InjectedCounterDisplay.vue";
import InjectedIncrementButton from "@/components/InjectedIncrementButton.vue";
import InjectedDecrementButton from "@/components/InjectedDecrementButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    CounterProvider,
    InjectedCounterDisplay,
    InjectedIncrementButton,
    InjectedDecrementButton,
  },
});
</script>
