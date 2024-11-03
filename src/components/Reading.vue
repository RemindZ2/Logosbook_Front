<template>
    <div class="reading-container">
        <h2>Чтение</h2>
        <div class="content">
            <div v-if="!isReading" class="text-preview">
                <button @click="startReading" class="read-button">Начать чтение</button>
            </div>

            <div v-else class="text-section">
                <p> {{ booktext }} </p>
                <button @click="stopReading" class="stop-button">Стоп</button>
                <span class="timer">Ваше время прочтения: {{ timer }} секунд</span>
            </div>
        </div>

        <div v-if="showQuestion" class="question-section">
            <p>Про что был Том 2, Часть 3, Глава 1?</p>
            <label><input type="checkbox" v-model="answers.option1" />Про дуб</label>
            <label><input type="checkbox" v-model="answers.option2" />Про Дубровского</label>
            <label><input type="checkbox" v-model="answers.option3" />Про Добрыню</label>
            <img src="" alt="Место для изображения" class="question-image">
        </div>
    </div>
</template>



<script>
export default {
    data () {
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
            },
        };
    },



    methods: {
        startReading () {
            this.isReading = true;
            this.showQuestion = false;
            this.timer = 0;
            this.intervalID = setInterval(() => {
                this.timer += 1;
            }, 1000);
        },


        stopReading () {
            clearInterval(this.intervalID);
            this.isReading = false;
            this.showQuestion = true;
        },

    },
};

</script>


<style scoped>
.reading-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    width: 66%;
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
}

.timer {
    font-size: 14px;
    color: #555;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.read-button:hover,
.stop-button:hover {
    background-color: #333;
}

.question-section {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.question-section p {
    margin-right: 20px;
}

.question-image {
    width: 150px;
    height: auto;
    border-radius: 8px;
}
</style>
