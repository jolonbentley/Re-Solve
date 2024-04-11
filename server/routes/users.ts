import { Router } from 'express'
import { addUser, getUserByAuthID } from '../db/functions/users'

const router = Router()

router.post('/addUser', async (req, res) => {
  // Adds a user to the database, given their authID and name
  const { authID, name } = req.body
  try {
    await addUser(authID, name)
    res.status(200).send(`User "${name}" was successfully added`)
  } catch (error) {
    console.error(error)
    res.status(500).send(`Failed to add user "${name}", ${error}`)
  }
})

router.get('/getUser', async (req, res) => {
  // Gets a user given their AuthID
  const { authID } = req.body
  console.log('🧙🏻', authID)
  try {
    const user = await getUserByAuthID(authID)
    res.status(200).send(user)
  } catch (error) {
    console.error(error)
    res.status(500).send("Failed to get user")
  }
})

export default router
