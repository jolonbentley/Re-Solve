import { Router } from 'express'
import { addUser, getUserByAuthID } from '../db/functions/users'
import * as db from '../db/db-functions'
import checkJwt, { JwtRequest } from '../auth0'

const router = Router()

router.post('/addUser', checkJwt, async (req: JwtRequest, res) => {
  // Adds a user to the database, given their auth0 authentication was supplied
  try {
    const auth0Id = req.auth?.sub as string
    const { name } = req.body
    await addUser(auth0Id, name)
    res.status(200).send(`User ${name} was successfully added`)
  } catch (error) {
    console.error(error)
    res.status(500).send(`Failed to add user "", ${error}`)
  }
})

router.get('/getUser', checkJwt, async (req: JwtRequest, res) => {
  // Gets a user given their auth0 authentication was supplied
  try {
    const auth0Id = req.auth?.sub as string
    const user = await getUserByAuthID(auth0Id)
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to get user')
  }
})

router.get('/getAllUsers', async (req, res) => {
  try {
    const users = await db.getAllUsers()
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const user = await db.getUserById(id)
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.patch('/edit', async (req, res) => {
  const id = parseInt(req.body.author_id)
  const updates = req.body
  delete updates.author_id
  console.log(updates, id)
  try {
    await db.updateUserProfile(id, updates)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
