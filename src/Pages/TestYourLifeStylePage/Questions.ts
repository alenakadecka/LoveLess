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
  {
    question: 'Do you own a fruit or vegetable net?',
    weight: 1,
    answers: [
      {
        text: 'Yes, of course, I love it.',
        value: 1,
      },
      {
        text: '.No, but I wish to buy it soon.',
        value: 0.5,
      },
      {
        text: 'No, and I do not even plan to own it.',
        value: 0,
      },
    ],
  },
  {
    question:
      'Do you use solid mind, shampoo and conditioner instead of the ones in plastic packaging?',
    weight: 1,
    answers: [
      {
        text: 'Yes, I prefer to use only these solid ones.',
        value: 1,
      },
      {
        text: 'I used both types of cosmetics.',
        value: 0.5,
      },
      {
        text: 'No, I use still the plastic ones.',
        value: 0,
      },
    ],
  },
  {
    question:
      'Do you believe that even an individual can help change nature and the planet with his lifestyle ?',
    weight: 1,
    answers: [
      {
        text: 'Yes, of course. I beleive in my individual effort.',
        value: 1,
      },
      {
        text: 'I often doubt it, when I see the behavior of the others.',
        value: 0.5,
      },
      {
        text: 'No, thats one of the reason, why I am often demotivated to separate and for zero waste.',
        value: 0,
      },
    ],
  },
  {
    question: 'What do you do with unwanted and unusable gifts from Christmas?',
    weight: 1,
    answers: [
      {
        text: 'I try to donate or swap them. Find them a new home.',
        value: 1,
      },
      {
        text: 'I maintend them until I am forced to do something in case of moving for example.',
        value: 0.5,
      },
      {
        text: 'I simply throw them away, without using energy to find some purpose of usage or donation of them.',
        value: 0,
      },
    ],
  },
  {
    question:
      'When a store offers the option to return packaging from products for a discount on a future purchase, do you make a habit of collecting and returning the packaging?',
    weight: 1,
    answers: [
      {
        text: 'Yes, always. I even choose these companies to shop with preference.',
        value: 1,
      },
      {
        text: 'I use it sometimes, but not purposly.',
        value: 0.5,
      },
      {
        text: 'I do not even know, that something like this exists.',
        value: 0,
      },
    ],
  },
  {
    question:
      'Do you have things at home that are just gathering dust and you have not touched them in a year? Not even to wipe the dust off ?',
    weight: 1,
    answers: [
      {
        text: 'No, I am reducing all things around often and persistantly.',
        value: 1,
      },
      {
        text: 'Yes, a few, that am not able to give away. However, the dust is already removed.',
        value: 0.5,
      },
      {
        text: 'Yes a lot. I do not feel motivated to give them away even if, I do not need them at all.',
        value: 0,
      },
    ],
  },
];
