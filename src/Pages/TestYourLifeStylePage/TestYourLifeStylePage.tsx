import { useCallback, useState } from 'react';
import { questions } from './Questions';

export function TestYourLifeStylePage(): JSX.Element {
  const Formular = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);

    const onNext = useCallback((index: number) => {
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
    const maximumScore = 18;

    const percenta = totalScore / questions.length;

    const currentQuestion = questions[currentIndex];

    const Result = () => {
      return (
        <div>
          <h1>Congratulations!</h1>
          <p>
            Your score is: {totalScore} of {maximumScore}
          </p>
          <p>Your percentage: {(percenta * 100).toFixed(2)}%</p>
          <p>You are on a very Good Road to Zero-Waste Life Style.</p>
        </div>
      );
    };

    return (
      <div>
        {currentIndex < questions.length ? (
          <div className="questiontext">
            <h1>{currentQuestion.question}</h1>
            <div>
              {currentQuestion.answers.map((answer, index) => (
                <button
                  className="answertext"
                  key={index}
                  onClick={() => onNext(index)}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <Result />
        )}
      </div>
    );
  };
  return <Formular />;
}
