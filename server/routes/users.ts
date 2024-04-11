import { Router } from 'express'
import { addUser, getUserByAuthID } from '../db/functions/users'
import * as db from '../db/db-functions'
import checkJwt, { JwtRequest } from '../auth0'

const router = Router()

router.post('/addUser', checkJwt, async (req, res) => {
  // Adds a user to the database, given their auth0 token
  const { token } = req.body
  try {
    await addUser(authID, name)
    res.status(200).send(`User "${name}" was successfully added`)
  } catch (error) {
    console.error(error)
    res.status(500).send(`Failed to add user "${name}", ${error}`)
  }
})

router.get('/getUser', checkJwt, async (req: JwtRequest, res) => {
  // Gets a user given their auth0 token
  try {
    const auth0Id = req.auth?.sub as string
    const user = getUserByAuthID(auth0Id)
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send("Failed to get user")
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

export default router
