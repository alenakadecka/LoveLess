import { Question } from './QuestionsTypes';

export const questions: Question[] = [
  {
    question: 'Do you recycle?',
    weight: 1,
    answers: [
      { text: 'yes', value: 1 },
      { text: 'sometimes', value: 1 },
      { text: 'no', value: 0 },
    ],
  },
  {
    question: 'Have you ever been to a package-free store?',
    weight: 1,
    answers: [
      { text: 'yes, I go whenever possible', value: 1 },
      { text: 'sometimes, not much often', value: 1 },
      { text: 'no, nor do I plan to', value: 0 },
    ],
  },
  {
    question: 'Do you compost or sort bio-waste?',
    weight: 1,
    answers: [
      { text: 'yes', value: 1 },
      { text: 'sometimes', value: 1 },
      { text: 'no, never', value: 0 },
    ],
  },
  {
    question: 'How do you perceive the shopping process?',
    weight: 1,
    answers: [
      {
        text: 'I always consider whether I really need it or use it',
        value: 1,
      },
      { text: 'I buy a lot, but I am trying to work on that', value: 1 },
      {
        text: 'I always consider whether I really need it or use it',
        value: 0,
      },
    ],
  },
  {
    question:
      'Do you prefer to use public transport and bicycle before private car?',
    weight: 1,
    answers: [
      {
        text: 'yes, I almost always use only public transport or bicycle',
        value: 1,
      },
      { text: 'it is "50/50"', value: 1 },
      { text: 'no, I use the most my private car', value: 0 },
    ],
  },
  {
    question: 'Do you try to save water?',
    weight: 1,
    answers: [
      {
        text: 'yes, I have many hacks to save the water',
        value: 1,
      },
      { text: 'I try, but I always waste a lot', value: 1 },
      { text: 'Unfotunately, not at all', value: 0 },
    ],
  },
  {
    question:
      'Are you a fan of resused cups for caffee and reused packaging for food from restarants? Do you have an app for it?',
    weight: 1,
    answers: [
      {
        text: 'yes, used it almost daily. I own my reused set.',
        value: 1,
      },
      { text: 'yes, but I only to start using it.', value: 1 },
      { text: 'I have no idea, that something like this exists.', value: 0 },
    ],
  },
  {
    question:
      'When decluttering your home, do you try to upcyclate and meaningfully donate your clutter?',
    weight: 1,
    answers: [
      {
        text: 'yes, certainly, always.',
        value: 1,
      },
      {
        text: 'often I try, but to the lack of energy and time I mostly throw the clutter away.',
        value: 1,
      },
      {
        text: 'Not at all. I am thankfull that I am able to throw away something.',
        value: 0,
      },
    ],
  },
];
