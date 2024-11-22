import { defineStore } from "pinia";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  available: boolean;
}

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [] as Book[],
    loading: false,
    error: "",
  }),
  actions: {
    async fetchBooks() {
      try {
        this.loading = true;
        this.books = await fetch("/api/books").then((res) => res.json());
      } catch (err) {
        this.error = "Gagal memuat data buku.";
      } finally {
        this.loading = false;
      }
    },
    getBookById(id: string) {
      return this.books.find((book) => book.id === id);
    },
    addBook(book: Book) {
      this.books.push({ ...book, id: Date.now().toString(), available: true });
    },
    deleteBook(id: string) {
      this.books = this.books.filter((book) => book.id !== id);
    },
  },
});
