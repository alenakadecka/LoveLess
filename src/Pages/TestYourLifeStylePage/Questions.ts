import { Question } from './QuestionsTypes';

export const questions: Question[] = [
  {
    question: 'Do you recycle?',
    weight: 1,
    answers: [
      { text: 'yes', value: 1 },
      { text: 'sometimes', value: 0.5 },
      { text: 'no', value: 0 },
    ],
  },
  {
    question: 'Have you ever been to a package-free store?',
    weight: 1,
    answers: [
      { text: 'yes, I go whenever possible', value: 1 },
      { text: 'sometimes, not much often', value: 0.5 },
      { text: 'no, nor do I plan to', value: 0 },
    ],
  },
  {
    question: 'Do you compost or sort bio-waste?',
    weight: 1,
    answers: [
      { text: 'yes', value: 1 },
      { text: 'sometimes', value: 0.5 },
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
      { text: 'I buy a lot, but I am trying to work on that', value: 0.5 },
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
      { text: 'It is "50/50".', value: 0.5 },
      { text: 'No, I use  my private car the most.', value: 0 },
    ],
  },
  {
    question: 'Do you try to save water?',
    weight: 1,
    answers: [
      {
        text: 'Yes, I have many hacks to save the water.',
        value: 1,
      },
      { text: 'I try, but I always waste a lot.', value: 0.5 },
      { text: 'Unfotunately, not at all.', value: 0 },
    ],
  },
  {
    question:
      'Are you a fan of resused cups for caffee and reused packaging for food from restarants? Do you have an app for it?',
    weight: 1,
    answers: [
      {
        text: 'Yes, I use it almost daily. I own my reused set.',
        value: 1,
      },
      { text: 'Yes, but I only to start using it.', value: 0.5 },
      { text: 'I have no idea, that something like this exists.', value: 0 },
    ],
  },
  {
    question:
      'When decluttering your home, do you try to upcyclate and meaningfully donate your clutter?',
    weight: 1,
    answers: [
      {
        text: 'Yes, certainly, always.',
        value: 1,
      },
      {
        text: 'I try very often, but to the lack of energy and time I mostly throw the clutter away.',
        value: 0.5,
      },
      {
        text: 'Not at all. I am thankfull that I am able to throw away something.',
        value: 0,
      },
    ],
  },
  {
    question:
      'Do you have favourite eco-friendly product brands that you like to buy?',
    weight: 1,
    answers: [
      {
        text: 'Yes, I have a few.',
        value: 1,
      },
      {
        text: 'Yes, but I am not so faithuful to buy the eco-friendly brands always.',
        value: 0.5,
      },
      {
        text: 'Not at all.',
        value: 0,
      },
    ],
  },
  {
    question: 'Do you make your own chemical-free cleaning products at home?',
    weight: 1,
    answers: [
      {
        text: 'Yes, I have made a few',
        value: 1,
      },
      {
        text: 'Sometimes.',
        value: 0.5,
      },
      {
        text: 'Not at all.',
        value: 0,
      },
    ],
  },
  {
    question: 'Do you use cloth or paper tissues?',
    weight: 1,
    answers: [
      {
        text: 'Always cloth tissues.',
        value: 1,
      },
      {
        text: 'Both types. But paper tissues from recyclated paper.',
        value: 0.5,
      },
      {
        text: 'Only the paper tissues.',
        value: 0,
      },
    ],
  },
  {
    question:
      'Do you know where there is a second-hand shop in your area with items for a symbolic price?',
    weight: 1,
    answers: [
      {
        text: 'Yes, I go there regularly.',
        value: 1,
      },
      {
        text: 'Yes, I have an idea. I plan to go there someday.',
        value: 0.5,
      },
      {
        text: 'No, i do not know about these shops at all.',
        value: 0,
      },
    ],
  },
];
