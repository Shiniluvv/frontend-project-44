import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
};

const getGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export { generateRound, getGameRules };
