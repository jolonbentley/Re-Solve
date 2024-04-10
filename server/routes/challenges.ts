import { Router } from 'express'
import * as db from '../db/db-functions'

const router = Router()

router.get('/all', async (req, res) => {
  try {
    const challenges = await db.getAllChallenges()
    res.json(challenges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
