import { useCallback, useState } from 'react';
import { questions } from './Questions';

const Formular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const onNext = useCallback(() => {
    // Get answer from somewhere
    const answer = 0;

    // Store answer index
    setAnswers((prevValue) => {
      // Pokrocile
      // array.push() ale immutable
      return [...prevValue, answer];
    });

    setCurrentIndex((prev) => prev + 1);
  }, []);

  const answerValues = answers.map((answerIndex, questionIndex) => {
    return questions[questionIndex].answers[answerIndex].value;
  });

  // Pokrocile
  const totalScore = answerValues.reduce((a, b) => a + b, 0);

  const percenta = totalScore / questions.length;

  const currentQuestion = questions[currentIndex];

  return <div>sem pojde logika html</div>;
};
