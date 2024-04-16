import { Router } from 'express'
import * as db from '../db/db-functions'

const router = Router()

// '/api/v1/challenges'

router.get('/', async (req, res) => {
  try {
    const challenges = await db.getAllChallenges()
    res.json(challenges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/comments', async (req, res) => {
  try {
    const comments = await db.getAllChallengeComments()
    res.json(comments)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const challenge = await db.getChallengeById(id)
    res.json(challenge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/completed/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const completedChallenges = await db.getCompletedChallenges(id)
    res.json(completedChallenges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/incomplete/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const incompleteChallenges = await db.getIncompleteChallenges(id)
    res.json(incompleteChallenges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/comments', async (req, res) => {
  const comment = req.body
  try {
    await db.saveChallengeComment(comment)
    res.status(201).send('Comment saved')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.patch('/comments/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const updates = req.body
  try {
    await db.updateChallengeComment(id, updates)
    res.status(200).send('Comment updated')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/submit', async (req, res) => {
  const data = { ...req.body, date: Date() }
  try {
    await db.submitNewChallenge(data)
    res.status(201).send('Challenge submitted')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/fivecompleted/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const completedChallenges = await db.getFiveCompletedChallenges(id)
    res.json(completedChallenges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/fiveincomplete/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const incompleteChallenges = await db.getFiveIncompleteChallenges(id)
    res.json(incompleteChallenges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})


router.get('/voteCheck/:user/:challenge', async (req, res) => {
  const userId = Number(req.params.user)
  const challengeId = Number(req.params.challenge)
  try {
    const check = await db.checkForUserVote(userId, challengeId)
    res.json(check)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/newUpvote/:user/:challenge', async (req, res) => {
  console.log('newupvote hit')
  const userId = Number(req.params.user)
  const challengeId = Number(req.params.challenge)
  try {
    const newVote = await db.newUpvote(userId, challengeId)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.patch('/changeUpvote/:user/:challenge', async (req, res) => {
  console.log('changeUpvote hit')
  const userId = Number(req.params.user)
  const challengeId = Number(req.params.challenge)
  try {
    const changeVote = await db.changeToUpvote(userId, challengeId)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/newDownvote/:user/:challenge', async (req, res) => {
  console.log('newDownvote hit')
  const userId = Number(req.params.user)
  const challengeId = Number(req.params.challenge)
  try {
    const newVote = await db.newDownvote(userId, challengeId)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.patch('/changeDownvote/:user/:challenge', async (req, res) => {
  console.log('changeDownvote hit')
  const userId = Number(req.params.user)
  const challengeId = Number(req.params.challenge)
  try {
    const changeVote = await db.changeToDownvote(userId, challengeId)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/page/:pageNo/:pageSize', async (req, res) => {
  const pageNo = Number(req.params.pageNo)
  const pageSize = Number(req.params.pageSize)
  const offset = (pageNo - 1) * pageSize
  try {
    const pageResults = await db.getNOffsetChallenges(pageSize, offset)
    res.json(pageResults)
  } catch (error) {
    console.error(error)
    res.status(418).send('You are a teapot')
  }})

export default router
