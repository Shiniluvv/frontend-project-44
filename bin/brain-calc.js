#!/usr/bin/env node
import { generateRound, getGameRules } from '../src/games/calc.js'
import runGame from '../src/engine.js'

runGame(generateRound, getGameRules)
