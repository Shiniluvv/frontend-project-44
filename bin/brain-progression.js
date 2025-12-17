#!/usr/bin/env node
import { generateRound, getGameRules } from '../src/games/progression.js'
import runGame from '../src/engine.js'

runGame(generateRound, getGameRules)
