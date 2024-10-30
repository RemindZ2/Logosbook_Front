<template>
    <div class="settings-container">
      <h2>Настройки</h2>
  
      <form @submit.prevent="saveSettings">
        <div class="form-group">
          <label for="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            v-model="settings.username"
            placeholder="Введите новое имя"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="settings.password"
            placeholder="Введите новый пароль"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="theme">Тема</label>
          <select id="theme" v-model="settings.theme">
            <option value="light">Светлая</option>
            <option value="dark">Тёмная</option>
          </select>
        </div>
  
        <button type="submit">Сохранить настройки</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Настройки по умолчанию
        settings: {
          username: '',     // Имя пользователя
          password: '',     // Пароль
          theme: 'light'    // Тема, по умолчанию светлая
        }
      };
    },
    methods: {
      saveSettings() {
        alert(`Настройки сохранены:
          Имя пользователя: ${this.settings.username}
          Пароль: ${'*'.repeat(this.settings.password.length)}
          Тема: ${this.settings.theme === 'light' ? 'Светлая' : 'Тёмная'}`
        );
  
        // Сохранение темы в локальном хранилище
        localStorage.setItem('theme', this.settings.theme);
        document.body.className = this.settings.theme;
      }
    },
    mounted() {
      // Устанавливаем тему из локального хранилища при загрузке
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.settings.theme = savedTheme;
        document.body.className = savedTheme;
      }
    }
  };
  </script>
  
  <style scoped>
.settings-container { 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 90%;
  max-width: 320px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px #00000015;
  background-color: #fff;
  margin-left: 0px;
  margin-right: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #444444;
}
</style>