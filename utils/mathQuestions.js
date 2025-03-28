// Function to generate a random number within a range
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Function to shuffle an array
export const shuffleArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Function to generate addition questions
export const generateAdditionQuestion = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)
  const correctAnswer = num1 + num2
  
  // Randomize number of options between 2 and 4
  const optionCount = getRandomNumber(2, 4)
  
  // Generate wrong options that are close to the correct answer
  let options = [correctAnswer.toString()]
  while (options.length < optionCount) {
    const wrongAnswer = correctAnswer + getRandomNumber(-5, 5)
    if (wrongAnswer !== correctAnswer && !options.includes(wrongAnswer.toString()) && wrongAnswer > 0) {
      options.push(wrongAnswer.toString())
    }
  }
  
  return {
    question: `${num1} + ${num2}?`,
    options: shuffleArray(options),
    correct: correctAnswer.toString()
  }
}

// Function to generate subtraction questions
export const generateSubtractionQuestion = () => {
  let num1 = getRandomNumber(10, 50)
  let num2 = getRandomNumber(1, num1) // Ensure positive result
  const correctAnswer = num1 - num2
  
  // Randomize number of options between 2 and 4
  const optionCount = getRandomNumber(2, 4)
  
  let options = [correctAnswer.toString()]
  while (options.length < optionCount) {
    const wrongAnswer = correctAnswer + getRandomNumber(-5, 5)
    if (wrongAnswer !== correctAnswer && !options.includes(wrongAnswer.toString()) && wrongAnswer >= 0) {
      options.push(wrongAnswer.toString())
    }
  }
  
  return {
    question: `${num1} - ${num2}?`,
    options: shuffleArray(options),
    correct: correctAnswer.toString()
  }
}

// Function to generate multiplication questions
export const generateMultiplicationQuestion = () => {
  const num1 = getRandomNumber(1, 12)
  const num2 = getRandomNumber(1, 12)
  const correctAnswer = num1 * num2
  
  // Randomize number of options between 2 and 4
  const optionCount = getRandomNumber(2, 4)
  
  let options = [correctAnswer.toString()]
  while (options.length < optionCount) {
    const wrongAnswer = correctAnswer + getRandomNumber(-10, 10)
    if (wrongAnswer !== correctAnswer && !options.includes(wrongAnswer.toString()) && wrongAnswer > 0) {
      options.push(wrongAnswer.toString())
    }
  }
  
  return {
    question: `${num1} × ${num2}?`,
    options: shuffleArray(options),
    correct: correctAnswer.toString()
  }
}

// Function to generate division questions
export const generateDivisionQuestion = () => {
  const num2 = getRandomNumber(1, 12)
  const num1 = num2 * getRandomNumber(1, 12) // Ensure clean division
  const correctAnswer = num1 / num2
  
  // Randomize number of options between 2 and 4
  const optionCount = getRandomNumber(2, 4)
  
  let options = [correctAnswer.toString()]
  while (options.length < optionCount) {
    const wrongAnswer = correctAnswer + getRandomNumber(-3, 3)
    if (wrongAnswer !== correctAnswer && !options.includes(wrongAnswer.toString()) && wrongAnswer > 0) {
      options.push(wrongAnswer.toString())
    }
  }
  
  return {
    question: `${num1} ÷ ${num2}?`,
    options: shuffleArray(options),
    correct: correctAnswer.toString()
  }
}

// Function to generate a set of random questions
export const generateQuestions = (count = 5) => {
  const questionGenerators = [
    generateAdditionQuestion,
    generateSubtractionQuestion,
    generateMultiplicationQuestion,
    generateDivisionQuestion
  ]
  
  const newQuestions = []
  for (let i = 0; i < count; i++) {
    const randomGenerator = questionGenerators[getRandomNumber(0, questionGenerators.length - 1)]
    newQuestions.push(randomGenerator())
  }
  
  return newQuestions
}

// Function to generate a single random question
export const generateRandomQuestion = () => {
  const questionGenerators = [
    generateAdditionQuestion,
    generateSubtractionQuestion,
    generateMultiplicationQuestion,
    generateDivisionQuestion
  ]
  
  const randomGenerator = questionGenerators[getRandomNumber(0, questionGenerators.length - 1)]
  return randomGenerator()
}

// Helper function to prevent scrolling until question is answered
export const preventScrollUntilAnswered = (element, isAnswered) => {
  if (!element) return
  
  if (!isAnswered) {
    // Prevent scrolling
    element.style.overflowY = 'hidden'
  } else {
    // Allow scrolling
    element.style.overflowY = 'auto'
  }
}