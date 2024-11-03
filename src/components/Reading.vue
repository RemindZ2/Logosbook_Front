<template>
    <div class="reading-container">
        <h2>Чтение</h2>
        <div class="content">

                    <div v-if="!isReading" key="preview" class="text-preview">
                    <button @click="startReading" class="read-button">Начать чтение</button>
                </div>

                <div v-else-if="isReading" key="section" class="text-section">
                    <p>{{ bookText }}</p>
                    <button @click="stopReading" class="stop-button">Стоп</button>
                    <span class="timer">Ваше время прочтения: {{ timer }} секунд</span>
                </div>
        </div>
            <div v-if="showQuestion" class="question-section">
                <p>Про что был Том 2, Часть 3, Глава 1?</p>
                <ul class="answer-list">
                    <li>
                        <label>
                            <input type="checkbox" v-model="answers.option1" />
                            Про дуб
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" v-model="answers.option2" />
                            Про Дубровского
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" v-model="answers.option3" />
                            Про Добрыню
                        </label>
                    </li>
                </ul>
                <img src="@/assets/images/Dub.jpg" alt="Место для изображения" class="question-image">
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isReading: false,
            showQuestion: false,
            timer: 0,
            intervalID: null,
            bookText: "Текст про дуб зеленый",
            answers: {
                option1: false,
                option2: false,
                option3: false
            }
        };
    },

    methods: {
        startReading() {
            this.isReading = true;
            this.showQuestion = false;
            this.timer = 0;
            this.intervalID = setInterval(() => {
                this.timer++;
            }, 1000);
        },

        stopReading() {
            clearInterval(this.intervalID);
            this.isReading = false;
            this.showQuestion = true;
        }
    }
};
</script>

<style scoped>
.reading-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    background-color: #fff;
    text-align: center;
}

h2 {
    font-weight: bold;
    margin-bottom: 24px;
}

.content {
    width: 80%;
    margin: 0 auto;
    position: relative;
}

.text-preview {
    display: flex;
    justify-content: center;
}

.text-section {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    line-height: 1.6;
}

.timer {
    font-size: 18px;
    color: #555;
    margin-top: 10px;
    display: block;
}

.read-button,
.stop-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
}

.read-button {
    background-color: #000000;
    color: white;
}

.read-button:hover {
    background-color: #000000;
}

.stop-button {
    background-color: #000000;
    color: white;
}

.stop-button:hover {
    background-color: #000000;
}

.question-section {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.question-section p {
    margin-bottom: 20px;
    font-size: 18px;
}

.answer-list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 20px;
}

.answer-list li {
    margin-bottom: 10px;
}

.question-image {
    width: 200px;
    height: auto;
    border-radius: 8px;
}
</style>