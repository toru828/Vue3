import CounterStoreType from "@/types/CounterStoreType";
import { inject, reactive } from "vue";
import { InjectionKey } from "vue";
import { useGlobalStore } from "./Global";

export const CounterKey: InjectionKey<CounterStoreType> =
  Symbol("CounterStore");

export function useCounterStore(): CounterStoreType {
  const store = inject(CounterKey);

  if (!store) {
    throw new Error(`${CounterKey} is not provided`);
  }
  return store;
}

export function counterStore(): CounterStoreType {
  const globalStore = useGlobalStore();

  const state = reactive({
    count: 0,
  });

  return {
    get count() {
      return state.count;
    },

    increment() {
      state.count += 1;
    },

    decrement() {
      state.count -= 1;
    },

    async asyncIncrement() {
      globalStore.loading = true;
      setTimeout(() => {
        globalStore.loading = false;
        state.count += 1;
      }, 1000);
    },

    async asyncDecrement() {
      globalStore.loading = true;
      setTimeout(() => {
        globalStore.loading = false;
        state.count -= 1;
      }, 1000);
    },
  };
}
