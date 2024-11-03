<template>
  <div class="library-container">
    <h2>Библиотека</h2>
    <div class="books">
      <div class="book" v-for="book in books" :key="book.id">
        <img :src="book.cover" alt="cover" class="cover" />
        <div class="title">{{ book.title }}</div>
        <div class="author">{{ book.author }}</div>
        <!-- Добавляем метод goToReadingPage -->
        <button class="read-button" @click="goToReadingPage(book)">Читать</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    function goToReadingPage(book) {
      if (book.title === 'Война и мир') {
        router.push('/reading');
      }
    }

    return {
      goToReadingPage,
    };
  },

  data() {
    return {
      books: [
        {
          id: 1,
          title: 'Война и мир',
          author: 'Л. Н. Толстой',
          cover: 'src/assets/images/ViM.jpg',
        },
        {
          id: 2,
          title: 'Анна Каренина',
          author: 'Л. Н. Толстой',
          cover: 'src/assets/images/Korenina.png',
        },
        {
          id: 3,
          title: 'Евгений Онегин',
          author: 'А. С. Пушкин',
          cover: 'src/assets/images/Onegin.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
.library-container {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.books {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.book {
  text-align: center;
  width: 150px;
}

.cover {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.title {
  font-weight: bold;
  margin-top: 10px;
}

.author {
  color: #555;
  margin: 5px 0;
}

.read-button {
  background-color: #000000;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.read-button:hover {
  background-color: #333;
}
</style>