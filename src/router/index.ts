import { createRouter, createWebHistory } from "vue-router";
import BookListPage from "../views/BookListPage.vue";
import BookDetailPage from "../views/BookDetailPage.vue";
import AddBookPage from "../views/AddBookPage.vue";

const routes = [
  { path: "/", component: BookListPage },
  { path: "/list", component: BookListPage },
  { path: "/books/:id", component: BookDetailPage },
  { path: "/add", component: AddBookPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
