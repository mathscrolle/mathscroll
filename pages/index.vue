<template>
  <div class="h-screen flex flex-col bg-[#09090b] text-[#e4e4e7]">
    <div class="flex-1 overflow-hidden">
      <div 
        class="h-full snap-y snap-mandatory overflow-y-auto smooth-scroll" 
        ref="scrollContainer"
      >
        <div 
          v-for="(question, index) in questions" 
          :key="index"
          class="h-full w-full flex items-center justify-center snap-start"
          :id="`question-${index}`"
        >
          <div class="bg-[#18181b] rounded-lg shadow-lg p-6 max-w-md w-full border border-[#27272a]">
            <div class="mb-6">
              <h3 class="text-4xl mb-2 text-[#f4f4f5]">{{ question.question }}</h3>
            </div>
            
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="(option, optIndex) in question.options"
                :key="optIndex"
                @click="selectAnswer(option, index)"
                class="aspect-square flex items-center justify-center text-center p-4 rounded-lg text-6xl font-medium transition-colors duration-200 border border-[#27272a] bg-[#1e1e21] text-[#e4e4e7]"
                :class="{
                  'hover:bg-[#27272a]': !question.answered,
                  'bg-[#166534] text-[#bbf7d0] border-[#166534]': question.answered && option === question.correct,  /* Hijau lebih soft */
                  'bg-[#7f1d1d] text-[#fecaca] border-[#7f1d1d]': question.answered && option !== question.correct && question.selectedAnswer === option /* Merah lebih soft */
                }"
                :disabled="question.answered"
              >
                {{ option }}
              </button>
            </div>
            
            <div class="mt-4 flex justify-between items-center">
              <p class="text-lg text-[#a1a1aa]">Score: {{ score }}/{{ totalAnswered }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, watch, nextTick, onMounted, computed } from 'vue'
import { generateQuestions, generateRandomQuestion } from '~/utils/mathQuestions'

const score = ref(0)
const questions = ref([])
const scrollContainer = ref(null)
const totalAnswered = ref(0)
const currentIndex = ref(0)

// Only show questions up to the current one
const visibleQuestions = computed(() => {
  return questions.value.slice(0, currentIndex.value + 1)
})

// Prepare questions with additional properties
const prepareQuestions = (questionList) => {
  return questionList.map(q => ({
    ...q,
    answered: false,
    selectedAnswer: null
  }))
}

// Start quiz immediately when component is mounted
onMounted(() => {
  questions.value = prepareQuestions(generateQuestions(1))
  score.value = 0
  totalAnswered.value = 0
  currentIndex.value = 0
})

// Function to scroll to a specific question
const scrollToQuestion = (index) => {
  const questionElement = document.getElementById(`question-${index}`)
  if (questionElement) {
    questionElement.scrollIntoView({ behavior: 'smooth' })
  }
}

const selectAnswer = async (selected, questionIndex) => {
  const question = questions.value[questionIndex]
  
  // Skip if already answered
  if (question.answered) return
  
  // Mark as answered
  question.answered = true
  question.selectedAnswer = selected
  totalAnswered.value++
  
  // Update score if correct
  if (selected === question.correct) {
    score.value++
  }
  
  // Add a new question if we're near the end
  if (questionIndex >= questions.value.length - 2) {
    const newQuestion = generateRandomQuestion()
    questions.value.push({
      ...newQuestion,
      answered: false,
      selectedAnswer: null
    })
  }
  
  // Increment current index to show the next question
  currentIndex.value++
  
  // No auto-scrolling - let the user scroll manually when ready
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  overscroll-behavior-y: contain;
  background-color: #111827; /* Darker background */
}

#__nuxt, #__layout {
  height: 100%;
}

/* Enhance scrolling experience */
.snap-y {
  scroll-snap-type: y mandatory;
}

.snap-start {
  scroll-snap-align: start;
}

/* Hide scrollbar but allow scrolling */
.overflow-y-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.overflow-y-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
