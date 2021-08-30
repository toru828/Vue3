import { inject, InjectionKey, reactive } from "vue";
import GlobalStoreType from "@/types/GlobalStoreType";

export const GlobalStoreKey: InjectionKey<GlobalStoreType> =
  Symbol("GlobalStore");

export function useGlobalStore(): GlobalStoreType {
  const store = inject(GlobalStoreKey);
  if (!store) {
    throw new Error(`${GlobalStoreKey} is not provided`);
  }
  return store;
}

export function globalStore(): GlobalStoreType {
  const state = reactive({
    loading: false,
  });

  return {
    get loading() {
      return state.loading;
    },

    set loading(loading: boolean) {
      state.loading = loading;
    },
  };
}
