import getRandomNumber from '../utils.js'

const operators = ['+', '-', '*']

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const operator = operators[getRandomNumber(0, operators.length - 1)]
  
  const question = `${num1} ${operator} ${num2}`
  const answer = String(calculate(num1, num2, operator))
  
  return { question, answer }
}

const getGameRules = () => 'What is the result of the expression?'

export { generateRound, getGameRules }
