<template>
  <div class="lds-circle" v-if="loading">
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { inject } from 'vue';

export default defineComponent({
  // props: ["loading"],
  // inject: ["loading"],
  setup() {
    const loading = inject('loading2')
    return {
      loading,
    }
  },
});
</script>

<style lang="scss">
.lds-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  transform: translateZ(1px);
  background: radial-gradient(rgba(20, 20, 20, 0.4), rgba(0, 0, 0, 0.4));
}
.lds-circle > div {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fff;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>
