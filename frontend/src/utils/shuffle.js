export function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function shuffleQuestion(question) {
  const options = [...question.options];

  const correctAnswer = question.options[question.answer];

  const shuffledOptions = shuffleArray(options);

  return {
    ...question,
    options: shuffledOptions,
    answer: shuffledOptions.indexOf(correctAnswer),
  };
}