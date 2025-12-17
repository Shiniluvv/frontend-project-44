#!/usr/bin/env node
import { generateRound, getGameRules } from '../src/games/gcd.js'
import runGame from '../src/engine.js'

runGame(getGameRules, generateRound)
