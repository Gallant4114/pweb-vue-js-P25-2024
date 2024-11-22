<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-6">Tambah Buku Baru</h1>
    <AddBookForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddBookForm from "../components/AddBookForm.vue";

export default defineComponent({
  components: { AddBookForm },
});
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
