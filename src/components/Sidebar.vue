<template>
  <div class="sidebar">
    <ul>
      <img src="@/assets/images/logosbook.png" alt="Логотип" class="logo">


      <button
        :class="{ active: activeButton === '/reading' }"
        @click="goToPage('/reading')"
      ></button>
      <button
        :class="{ active: activeButton === '/library' }"
        @click="goToPage('/library')"
      >
        <img src="@/assets/images/library.png" alt="Библиотека" class="icon">
        Библиотека
      </button>
      <button
        :class="{ active: activeButton === '/chat' }"
        @click="goToPage('/chat')"
      >
        <img src="@/assets/images/chat.png" alt="Чат" class="icon">
        Чат
      </button>
      <button
        :class="{ active: activeButton === '/upload' }"
        @click="goToPage('/upload')"
      >
        <img src="@/assets/images/download.png" alt="Загрузка" class="icon">
        Загрузка
      </button>
      <button
        :class="{ active: activeButton === '/collection' }"
        @click="goToPage('/collection')"
      >
        <img src="@/assets/images/collection.png" alt="Коллекция" class="icon">
        Коллекция
      </button>
      <button
        :class="{ active: activeButton === '/favorites' }"
        @click="goToPage('/favorites')"
      >
        <img src="@/assets/images/favorites.png" alt="Избранное" class="icon">
        Избранное
      </button>
      <div class="separator"></div>
      <button
        :class="{ active: activeButton === '/login' }"
        @click="goToPage('/login')"
      >
        <img src="@/assets/images/profile.png" alt="Профиль" class="icon">
        Профиль
      </button>
      <button
        :class="{ active: activeButton === '/settings' }"
        @click="goToPage('/settings')"
      >
        <img src="@/assets/images/settings.png" alt="Настройки" class="icon">
        Настройки
      </button>
      <button
        :class="{ active: activeButton === '/exit' }"
        @click="goToPage('/exit')"
      >
        <img src="@/assets/images/exit.png" alt="Выйти" class="icon">
        Выйти
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeButton: null, // Хранит текущую активную страницу
    };
  },
  methods: {
    goToPage(page) {
      this.activeButton = page; // Устанавливаем активную страницу
      this.$router.push(page);
    },
  },
};

</script>

<style scoped>
body {
  font-family: 'Isamiri Di', sans-serif;
}
.logo {
  display: flex; 
  align-items: center;
  width: 140px;
  height: 140px;
  padding-left: 25px;
}
.sidebar {
  width: 200px;
  background-color: #e9e9e9;
  padding: 20px;
  height: 100vh;
  font-family: IsamiRiDisplay;
}

ul {
  list-style: none;
  padding: 0;
}

button {
  display: flex; 
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  font-family: 'Isamiri', sans-serif;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  transition: border 0.3s;
}

button:hover {
  border: 1px solid gray;
  border-radius: 4px;
}

button.active {
  background-color: #d3d3d3;
  border-radius: 4px;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: gray;
  margin: 10px 0;
}
</style>
