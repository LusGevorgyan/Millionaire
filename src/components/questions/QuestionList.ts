const questionData = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    difficulty: "easy",
    answers: [
      { option: "A", text: "Phone", correct: false, probability: 10 },
      { option: "B", text: "Watches", correct: true, probability: 70 },
      { option: "C", text: "Food", correct: false, probability: 10 },
      { option: "D", text: "Cosmetics", correct: false, probability: 10 },
    ],
  },
  {
    id: 2,
    question: "When did the website 'Facebook' launch?",
    difficulty: "easy",
    answers: [
      { option: "A", text: "2004", correct: true, probability: 70 },
      { option: "B", text: "2005", correct: false, probability: 10 },
      { option: "C", text: "2006", correct: false, probability: 10 },
      { option: "D", text: "2007", correct: false, probability: 10 },
    ],
  },
  {
    id: 3,
    question: "Who played the character of Harry Potter in the movie series?",
    difficulty: "easy",
    answers: [
      { option: "A", text: "Elijah Wood", correct: false, probability: 20 },
      { option: "B", text: "Daniel Radcliffe", correct: true, probability: 60 },
      { option: "C", text: "Rupert Grint", correct: false, probability: 10 },
      { option: "D", text: "Tom Felton", correct: false, probability: 10 },
    ],
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    difficulty: "easy",
    answers: [
      { option: "A", text: "Earth", correct: false, probability: 10 },
      { option: "B", text: "Mars", correct: true, probability: 70 },
      { option: "C", text: "Jupiter", correct: false, probability: 10 },
      { option: "D", text: "Venus", correct: false, probability: 10 },
    ],
  },
  {
    id: 5,
    question: "What is the capital city of Australia?",
    difficulty: "medium",
    answers: [
      { option: "A", text: "Sydney", correct: false, probability: 50 },
      { option: "B", text: "Melbourne", correct: false, probability: 30 },
      { option: "C", text: "Canberra", correct: true, probability: 20 },
      { option: "D", text: "Brisbane", correct: false, probability: 10 },
    ],
  },
  {
    id: 6,
    question: "What is the largest ocean on Earth?",
    difficulty: "medium",
    answers: [
      { option: "A", text: "Atlantic Ocean", correct: false, probability: 20 },
      { option: "B", text: "Indian Ocean", correct: false, probability: 20 },
      { option: "C", text: "Pacific Ocean", correct: true, probability: 50 },
      { option: "D", text: "Arctic Ocean", correct: false, probability: 10 },
    ],
  },
  {
    id: 7,
    question: "What is the smallest prime number?",
    difficulty: "medium",
    answers: [
      { option: "A", text: "0", correct: false, probability: 10 },
      { option: "B", text: "1", correct: false, probability: 20 },
      { option: "C", text: "2", correct: true, probability: 60 },
      { option: "D", text: "3", correct: false, probability: 10 },
    ],
  },
  {
    id: 8,
    question: "Which country is home to the kangaroo?",
    difficulty: "easy",
    answers: [
      { option: "A", text: "India", correct: false, probability: 10 },
      { option: "B", text: "Australia", correct: true, probability: 70 },
      { option: "C", text: "South Africa", correct: false, probability: 10 },
      { option: "D", text: "Brazil", correct: false, probability: 10 },
    ],
  },
  {
    id: 9,
    question: "Which element has the chemical symbol 'O'?",
    difficulty: "easy",
    answers: [
      { option: "A", text: "Gold", correct: false, probability: 10 },
      { option: "B", text: "Oxygen", correct: true, probability: 70 },
      { option: "C", text: "Osmium", correct: false, probability: 10 },
      { option: "D", text: "Oganesson", correct: false, probability: 10 },
    ],
  },
  {
    id: 10,
    question: "What is the currency of Japan?",
    difficulty: "easy",
    answers: [
      { option: "A", text: "Yuan", correct: false, probability: 20 },
      { option: "B", text: "Won", correct: false, probability: 20 },
      { option: "C", text: "Yen", correct: true, probability: 50 },
      { option: "D", text: "Dollar", correct: false, probability: 10 },
    ],
  },
  {
    id: 11,
    question: "Which language is the most spoken worldwide?",
    difficulty: "medium",
    answers: [
      { option: "A", text: "English", correct: false, probability: 50 },
      { option: "B", text: "Mandarin Chinese", correct: true, probability: 30 },
      { option: "C", text: "Spanish", correct: false, probability: 10 },
      { option: "D", text: "Hindi", correct: false, probability: 10 },
    ],
  },
  {
    id: 12,
    question: "In what year did World War II end?",
    difficulty: "medium",
    answers: [
      { option: "A", text: "1943", correct: false, probability: 10 },
      { option: "B", text: "1944", correct: false, probability: 20 },
      { option: "C", text: "1945", correct: true, probability: 60 },
      { option: "D", text: "1946", correct: false, probability: 10 },
    ],
  },
  {
    id: 13,
    question: "Which artist painted the Mona Lisa?",
    difficulty: "medium",
    answers: [
      { option: "A", text: "Vincent van Gogh", correct: false, probability: 20 },
      { option: "B", text: "Pablo Picasso", correct: false, probability: 20 },
      { option: "C", text: "Leonardo da Vinci", correct: true, probability: 50 },
      { option: "D", text: "Claude Monet", correct: false, probability: 10 },
    ],
  },
  {
    id: 14,
    question: "What is the largest bone in the human body?",
    difficulty: "medium",
    answers: [
      { option: "A", text: "Humerus", correct: false, probability: 20 },
      { option: "B", text: "Femur", correct: true, probability: 60 },
      { option: "C", text: "Tibia", correct: false, probability: 10 },
      { option: "D", text: "Fibula", correct: false, probability: 10 },
    ],
  },
  {
    id: 15,
    question: "Which Nobel Prize did Albert Einstein win?",
    difficulty: "medium",
    answers: [
      { option: "A", text: "Peace", correct: false, probability: 20 },
      { option: "B", text: "Literature", correct: false, probability: 10 },
      { option: "C", text: "Physics", correct: true, probability: 60 },
      { option: "D", text: "Chemistry", correct: false, probability: 10 },
    ],
  },
  {
    id: 16,
    question: "What is the main ingredient in guacamole?",
    difficulty: "easy",
    answers: [
      { option: "A", text: "Tomato", correct: false, probability: 20 },
      { option: "B", text: "Avocado", correct: true, probability: 70 },
      { option: "C", text: "Onion", correct: false, probability: 10 },
      { option: "D", text: "Garlic", correct: false, probability: 10 },
    ],
  },
]

export default questionData