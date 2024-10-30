<template>
    <div class="page-container">
      <div class="login-container">
        <h2>Регистрация</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username">Логин</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Введите логин"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="password">Пароль</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Введите пароль"
              required
            />
          </div>
  
          <button @click="goToLogin" class="btn" type="submit">Войти</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      goToLogin() {
      this.$router.push('/');
    }
    }
  };
  </script>
  
  <style scoped>

  html, body {
    height: 100%;
    margin: 0;
  }
  
  .page-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .login-container {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px #00000015;
    background-color: #fff;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    width: 100%;
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input {
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
    background-color: #000000;
  }
  </style>
  