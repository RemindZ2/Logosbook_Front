<template>
    <div
      class="upload-container"
      @dragover.prevent="onDragOver"
      @dragleave="onDragLeave"
      @drop.prevent="onDrop"
    >
      <input
        type="file"
        ref="fileInput"
        @change="onFileChange"
        accept=".pdf,.epub,.mobi"
        style="display: none;"
      />
      <button @click="triggerFileSelect">Выбрать файл</button>
  
      <div v-if="dragging" class="drag-overlay">
        Перетащите сюда для отправки
      </div>
  
      <div v-if="file" class="file-info">
        <p>Файл: {{ file.name }}</p>
        <button @click="uploadFile">Загрузить</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dragging: false,
        file: null,
      };
    },
    methods: {
      onDragOver() {
        this.dragging = true;
      },
      onDragLeave() {
        this.dragging = false;
      },
      onDrop(event) {
        this.dragging = false;
        const files = event.dataTransfer.files;
        if (files.length) {
          this.file = files[0];
        }
      },
      onFileChange(event) {
        const files = event.target.files;
        if (files.length) {
          this.file = files[0];
        }
      },
      triggerFileSelect() {
        this.$refs.fileInput.click();
      },
      uploadFile() {
        if (!this.file) return;
        // Логика загрузки файла
        console.log("Загружается файл:", this.file.name);
        // Очистка выбранного файла
        this.file = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .upload-container {
    position: relative;
    padding: 20px;
    border: 2px dashed #ccc;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    min-width: 1000px;
  }
  
  .drag-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000;
    color: #fff;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  
  .file-info {
    margin-top: 10px;
  }
  </style>
  