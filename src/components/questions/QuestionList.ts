const questionData = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    difficulty: "easy",
    answers: [
      { option: "Ա", text: "Phone", correct: false, probability: 10 },
      { option: "Բ", text: "Watches", correct: true, probability: 70 },
      { option: "Գ", text: "Food", correct: false, probability: 10 },
      { option: "Դ", text: "Cosmetics", correct: false, probability: 10 },
    ],
  },
  {
    id: 2,
    question: "When did the website 'Facebook' launch?",
    difficulty: "easy",
    answers: [
      { option: "Ա", text: "2004", correct: true, probability: 70 },
      { option: "Բ", text: "2005", correct: false, probability: 10 },
      { option: "Գ", text: "2006", correct: false, probability: 10 },
      { option: "Դ", text: "2007", correct: false, probability: 10 },
    ],
  },
  {
    id: 3,
    question: "Who played the character of Harry Potter in the movie series?",
    difficulty: "easy",
    answers: [
      { option: "Ա", text: "Elijah Wood", correct: false, probability: 20 },
      { option: "Բ", text: "Daniel Radcliffe", correct: true, probability: 60 },
      { option: "Գ", text: "Rupert Grint", correct: false, probability: 10 },
      { option: "Դ", text: "Tom Felton", correct: false, probability: 10 },
    ],
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    difficulty: "easy",
    answers: [
      { option: "Ա", text: "Earth", correct: false, probability: 10 },
      { option: "Բ", text: "Mars", correct: true, probability: 70 },
      { option: "Գ", text: "Jupiter", correct: false, probability: 10 },
      { option: "Դ", text: "Venus", correct: false, probability: 10 },
    ],
  },
  {
    id: 5,
    question: "What is the capital city of Australia?",
    difficulty: "medium",
    answers: [
      { option: "Ա", text: "Sydney", correct: false, probability: 50 },
      { option: "Բ", text: "Melbourne", correct: false, probability: 30 },
      { option: "Գ", text: "Canberra", correct: true, probability: 20 },
      { option: "Դ", text: "Brisbane", correct: false, probability: 10 },
    ],
  },
  {
    id: 6,
    question: "What is the largest ocean on Earth?",
    difficulty: "medium",
    answers: [
      { option: "Ա", text: "Atlantic Ocean", correct: false, probability: 20 },
      { option: "Բ", text: "Indian Ocean", correct: false, probability: 20 },
      { option: "Գ", text: "Pacific Ocean", correct: true, probability: 50 },
      { option: "Դ", text: "Arctic Ocean", correct: false, probability: 10 },
    ],
  },
  {
    id: 7,
    question: "What is the smallest prime number?",
    difficulty: "medium",
    answers: [
      { option: "Ա", text: "0", correct: false, probability: 10 },
      { option: "Բ", text: "1", correct: false, probability: 20 },
      { option: "Գ", text: "2", correct: true, probability: 60 },
      { option: "Դ", text: "3", correct: false, probability: 10 },
    ],
  },
  {
    id: 8,
    question: "Which country is home to the kangaroo?",
    difficulty: "easy",
    answers: [
      { option: "Ա", text: "India", correct: false, probability: 10 },
      { option: "Բ", text: "Australia", correct: true, probability: 70 },
      { option: "Գ", text: "South Africa", correct: false, probability: 10 },
      { option: "Դ", text: "Brazil", correct: false, probability: 10 },
    ],
  },
  {
    id: 9,
    question: "Which element has the chemical symbol 'O'?",
    difficulty: "easy",
    answers: [
      { option: "Ա", text: "Gold", correct: false, probability: 10 },
      { option: "Բ", text: "Oxygen", correct: true, probability: 70 },
      { option: "Գ", text: "Osmium", correct: false, probability: 10 },
      { option: "Դ", text: "Oganesson", correct: false, probability: 10 },
    ],
  },
  {
    id: 10,
    question: "What is the currency of Japan?",
    difficulty: "easy",
    answers: [
      { option: "Ա", text: "Yuan", correct: false, probability: 20 },
      { option: "Բ", text: "Won", correct: false, probability: 20 },
      { option: "Գ", text: "Yen", correct: true, probability: 50 },
      { option: "Դ", text: "Dollar", correct: false, probability: 10 },
    ],
  },
  {
    id: 11,
    question: "Which language is the most spoken worldwide?",
    difficulty: "medium",
    answers: [
      { option: "Ա", text: "English", correct: false, probability: 50 },
      { option: "Բ", text: "Mandarin Chinese", correct: true, probability: 30 },
      { option: "Գ", text: "Spanish", correct: false, probability: 10 },
      { option: "Դ", text: "Hindi", correct: false, probability: 10 },
    ],
  },
  {
    id: 12,
    question: "In what year did World War II end?",
    difficulty: "medium",
    answers: [
      { option: "Ա", text: "1943", correct: false, probability: 10 },
      { option: "Բ", text: "1944", correct: false, probability: 20 },
      { option: "Գ", text: "1945", correct: true, probability: 60 },
      { option: "Դ", text: "1946", correct: false, probability: 10 },
    ],
  },
  {
    id: 13,
    question: "Which artist painted the Mona Lisa?",
    difficulty: "medium",
    answers: [
      { option: "Ա", text: "Vincent van Gogh", correct: false, probability: 20 },
      { option: "Բ", text: "Pablo Picasso", correct: false, probability: 20 },
      { option: "Գ", text: "Leonardo da Vinci", correct: true, probability: 50 },
      { option: "Դ", text: "Claude Monet", correct: false, probability: 10 },
    ],
  },
  {
    id: 14,
    question: "What is the largest bone in the human body?",
    difficulty: "medium",
    answers: [
      { option: "Ա", text: "Humerus", correct: false, probability: 20 },
      { option: "Բ", text: "Femur", correct: true, probability: 60 },
      { option: "Գ", text: "Tibia", correct: false, probability: 10 },
      { option: "Դ", text: "Fibula", correct: false, probability: 10 },
    ],
  },
  {
    id: 15,
    question: "Which Nobel Prize did Albert Einstein win?",
    difficulty: "medium",
    answers: [
      { option: "Ա", text: "Peace", correct: false, probability: 20 },
      { option: "Բ", text: "Literature", correct: false, probability: 10 },
      { option: "Գ", text: "Physics", correct: true, probability: 60 },
      { option: "Դ", text: "Chemistry", correct: false, probability: 10 },
    ],
  },
  {
    id: 16,
    question: "What is the main ingredient in guacamole?",
    difficulty: "easy",
    answers: [
      { option: "Ա", text: "Tomato", correct: false, probability: 20 },
      { option: "Բ", text: "Avocado", correct: true, probability: 70 },
      { option: "Գ", text: "Onion", correct: false, probability: 10 },
      { option: "Դ", text: "Garlic", correct: false, probability: 10 },
    ],
  },
]

export default questionData