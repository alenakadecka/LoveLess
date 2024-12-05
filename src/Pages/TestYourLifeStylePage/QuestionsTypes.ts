export interface Question {
  question: string;
  weight: number;
  answers: Answer[];
}

interface Answer {
  text: string;
  value: number;
}
