<template>
  <transition name="slide">
    <button
      v-if="more && !finished"
      class=" bg-purple-900 hover:bg-purple-800 text-gray-200 font-bold py-2 px-4 rounded flex items-center fixed right-0 more-btn"
      @click="load"
    >
      <svg
        class="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>{{ loadingBtn ? "Loading..." : "More beers" }}</span>
    </button>
  </transition>
</template>

<script>
export default {
  props: ["more", "loadingBtn", "finished"],
  methods: {
    load() {
      this.$emit("load-more");
    }
  }
};
</script>

<style lang="scss">
.more-btn {
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
}
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  bottom: 0;
}
</style>
