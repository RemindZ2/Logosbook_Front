<template>
  <div class="chat-container">
    <div class="messages">
      <div class="message bot-message">
        <p>Привет! Как ваши дела?</p>
      </div>

      <div
        v-for="(message, index) in chatMessages"
        :key="index"
        :class="['message', message.sender === 'user' ? 'user-message' : 'bot-message']"
      >
        <p>{{ message.text }}</p>
      </div>
    </div>

    <div class="input-container">
      <input
        type="text"
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Напишите сообщение..."
      />
      <button @click="sendMessage">Отправить</button>
      <select v-model="compressionLevel" class="compression-select">
        <option value="high">Сверхсжатие</option>
        <option value="normal">Сжатие</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: "", // Новое сообщение пользователя
      chatMessages: [], // Массив сообщений в чате
      compressionLevel: "normal" // Уровень сжатия
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === "") return; // Проверка на пустое сообщение
      this.chatMessages.push({ text: this.newMessage, sender: "user" });
      this.newMessage = "";
    },
  },
};
</script>
  
  <style scoped>
  .compression-select {
  margin-left: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  }
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 90vh;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    min-width: 800px;
  }
  
  .messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    background-color: #f5f5f5;
  }
  
  .message {
    margin: 10px 0;
    padding: 12px;
    border-radius: 10px;
    max-width: 70%;
    word-wrap: break-word;
  }
  
  .bot-message {
    background-color: #e0e0e0;
    align-self: flex-start;
  }
  
  .user-message {
    background-color: #317fc7;
    color: white;
    align-self: flex-end;
  }
  
  .input-container {
    display: flex;
    border-top: 1px solid #ddd;
    padding: 10px;
  }
  
  input[type="text"] {
    flex: 1;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    margin-right: 10px;
  }
  
  button {
    padding: 15px 25px;
    font-size: 16px;
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