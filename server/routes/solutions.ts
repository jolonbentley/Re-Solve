import { Router } from 'express'
import * as db from '../db/db-functions'

const router = Router()

router.patch('/comment', async (req, res) => {
  const { id, solutionId } = req.body
  try {
    await db.updateSolutionId(id, solutionId)
    res.status(200).send("got 'em")
  } catch (error) {
    console.error(error)
    res.status(500).send("It ain't it")
  }
})

router.patch('/feature', async (req, res) => {
  const { id, solutionId } = req.body
  try {
    await db.updateFeaturedSolutionId(id, solutionId)
    res.status(200).send("got 'em")
  } catch (error) {
    console.error(error)
    res.status(500).send("It ain't it")
  }
})

export default router
