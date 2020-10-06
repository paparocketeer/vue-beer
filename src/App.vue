<template>
  <div id="app">
    <Nav />
    <div v-if="!loading" class="container">
      <div class="flex flex-wrap -mx-2">
        <div
          class="w-full sm:w-1/2 xl:w-1/3 mb-4 px-2"
          v-for="(beer, index) in beers"
          :key="index"
        >
          <BeerCard :beer="beer" :index="index" />
        </div>
        <trigger @triggerIntersected="showMore()" />
      </div>
      <Button
        :more="more"
        :finished="finished"
        :loadingBtn="loadingBtn"
        v-on:load-more="loadMore"
      />
    </div>
    <div class="container" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "./components/Nav";
import BeerCard from "./components/BeerCard";
import Trigger from "./components/common/Trigger";
import Spinner from "./components/common/Spinner";
import Button from "./components/common/Button";
export default {
  name: "App",
  components: {
    BeerCard,
    Nav,
    Trigger,
    Spinner,
    Button
  },
  data() {
    return {
      page: 1,
      limit: 25,
      more: false,
      loadingBtn: false
    };
  },
  created() {
    this.$store.dispatch("loadData", {
      page: this.page,
      limit: this.limit
    });
  },
  computed: {
    ...mapState(["beers", "loading", "finished"])
  },
  methods: {
    async loadMore() {
      this.page += 1;
      this.loadingBtn = true;
      await this.$store.dispatch("loadData", {
        page: this.page,
        limit: this.limit
      });
      this.more = false;
    },
    showMore() {
      this.more = true;
      this.loadingBtn = false;
    }
  }
};
</script>
