<template>
  <div class="flex justify-center flex-wrap shadow-xl my-3 rounded-lg p-6">
    <div class="flex flex-col items-center justify-center relative">
      <div
        class="font-bold absolute top-0 left-0 border-gray-800 rounded-full w-8 h-8 border flex items-center justify-center"
      >
        {{ index + 1 }}
      </div>
      <img class="h-64" :src="beer.image_url" />
      <div class="flex flex-col justify-center items-center beer-desc">
        <span class="font-serif">{{ beer.name }}</span>
        <span class="text-sm">{{ beer.description }}</span>
        <span class="text-sm text-purple-800 italic mt-1">{{
          beer.brewers_tips
        }}</span>
      </div>
      <div class="flex justify-center items-center">
        <button
          @click="modalEdit = true"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded"
        >
          Edit
        </button>
        <button
          @click="modalDelete = true"
          class=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
    <ModalDelete
      :index="index"
      v-if="modalDelete"
      v-on:delete-close="modalDelete = false"
    />
    <ModalEdit
      :index="index"
      :beer="beer"
      v-if="modalEdit"
      v-on:edit-close="modalEdit = false"
    />
  </div>
</template>

<script>
import ModalDelete from "./common/ModalDelete";
import ModalEdit from "./common/ModalEdit";
export default {
  data() {
    return {
      modalDelete: false,
      modalEdit: false
    };
  },
  components: {
    ModalDelete,
    ModalEdit
  },
  props: ["beer", "index"],
  methods: {
    deleteBeer() {
      this.$store.dispatch("deleteBeerById", this.index);
      this.modalDelete = false;
    }
  }
};
</script>

<style lang="scss">
.beer-desc {
  height: 20rem;
}
</style>
