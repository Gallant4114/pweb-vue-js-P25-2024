<template>
  <div class="container mx-auto mt-8">
    <BookDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookDetail from "../components/BookDetail.vue";

export default defineComponent({
  components: { BookDetail },
});
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
