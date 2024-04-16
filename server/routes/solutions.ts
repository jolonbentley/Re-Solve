import { Router } from 'express'
import * as db from '../db/db-functions'

const router = Router()

// '/api/v1/solutions'

router.get('/', async (req, res) => {
  try {
    const challenges = await db.getAllSolutions()
    res.json(challenges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/challengesolution/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const solutions = await db.getSolutionsForChallenge(id)
    res.json(solutions)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/submit', async (req, res) => {
  const solution = { ...req.body, date: Date() }
  const userId = solution.author_id
  const challengeId = solution.challenge_id
  const check = await db.checkForSolution(userId, challengeId)

  try {
    if (check === false) {
      await db.saveSolution(solution)
      res.status(201).send('Solution saved')
    } else {
      res.status(401).send('You have already submitted a solution')
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.patch('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const updates = req.body
  try {
    await db.updateSolution(id, updates)
    res.status(200).send('Solution updated')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/comments', async (req, res) => {
  try {
    const comments = await db.getAllSolutionComments()
    res.json(comments)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/comments/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const comments = await db.getSolutionCommentsById(id)
    res.json(comments)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/comments', async (req, res) => {
  const comment = { ...req.body, date: Date() }
  try {
    await db.saveSolutionComment(comment)
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
    await db.updateSolutionComment(id, updates)
    res.status(200).send('Comment updated')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/voteCheck/:user/:solution', async (req, res) => {
  const userId = Number(req.params.user)
  const solution = Number(req.params.solution)
  try {
    const check = await db.checkForUserVoteSolution(userId, solution)
    res.json(check)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/newUpvote/:user/:solution', async (req, res) => {
  const userId = Number(req.params.user)
  const solution = Number(req.params.solution)
  try {
    const newVote = await db.newUpvoteSolution(userId, solution)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.patch('/changeUpvote/:user/:solution', async (req, res) => {
  const userId = Number(req.params.user)
  const solution = Number(req.params.solution)
  try {
    const changeVote = await db.changeToUpvoteSolution(userId, solution)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/newDownvote/:user/:solution', async (req, res) => {
  const userId = Number(req.params.user)
  const solution = Number(req.params.solution)
  try {
    const newVote = await db.newDownvoteSolution(userId, solution)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.patch('/changeDownvote/:user/:solution', async (req, res) => {
  const userId = Number(req.params.user)
  const solution = Number(req.params.solution)
  try {
    const changeVote = await db.changeToDownvoteSolution(userId, solution)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router

// router.patch('/comment', async (req, res) => {
//   const { id, solutionId } = req.body
//   try {
//     await db.updateSolutionId(id, solutionId)
//     res.status(200).send("got 'em")
//   } catch (error) {
//     console.error(error)
//     res.status(500).send("It ain't it")
//   }
// })

// router.patch('/feature', async (req, res) => {
//   const { id, solutionId } = req.body
//   try {
//     await db.updateFeaturedSolutionId(id, solutionId)
//     res.status(200).send("got 'em")
//   } catch (error) {
//     console.error(error)
//     res.status(500).send("It ain't it")
//   }
// })
