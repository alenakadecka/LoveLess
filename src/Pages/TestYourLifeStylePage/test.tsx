export {};

// import { useCallback, useState } from 'react';
// import { questions } from './Questions';

// const Formular = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState<number[]>([]);

//   const onNext = useCallback(() => {
//     // Get answer from somewhere
//     const answer = 0;

//     // Store answer index
//     setAnswers((prevValue) => {
//       // Pokrocile
//       // array.push() ale immutable
//       return [...prevValue, answer];
//     });

//     setCurrentIndex((prev) => prev + 1);
//   }, []);

//   const answerValues = answers.map((answerIndex, questionIndex) => {
//     return questions[questionIndex].answers[answerIndex].value;
//   });

//   // Pokrocile
//   const totalScore = answerValues.reduce((a, b) => a + b, 0);

//   const percenta = totalScore / questions.length;

//   const currentQuestion = questions[currentIndex];

//   if (currentIndex >= questions.length) {
//     // When all questions are answered
//     return (
//       <div>
//         <h1>Test Completed</h1>
//         <p>Your total score is: {totalScore}</p>
//         <p>Percentage: {percenta.toFixed(2)}%</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div>
//         <h1>Test Your LifeStyle</h1>
//         <div>
//           <h2>{currentQuestion.question}</h2>
//           <ul>
//             {currentQuestion.answers.map((answers, index) => (
//               <li key={index}>
//                 <button onClick={() => onNext()}>{answers.text}</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
