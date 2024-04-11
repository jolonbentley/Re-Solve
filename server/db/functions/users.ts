import db from '../connection.ts'
import { User } from '../../../models/users.ts'

function duckGenerator(seed: string) {
  // Finds the users natural duck
  const ducks = [
    'Mallard',
    'Scaup',
    'Northern Pintail',
    'Seagull',
    'Paradise Shelduck',
    'Pacific Black',
    'Shoveler',
    'Pateke',
    'Auckland Islands Teal',
    'Grey Teal',
  ]
  let hash = 0

  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32 bit int
  }
  hash = Math.round(Math.abs(hash) / 4)
  return ducks[hash % 10]
}

export async function addUser(authID: string, givenName: string) {
  // Check if user already exists in the DB.
  const checkIfExists = await getUserByAuthID(authID)
  if (checkIfExists) {
    console.log('entry already found, not adding another one')
    return
  }

  // Add the new user to the DB.
  const userData = {
    // id: 1, primary key is automatically filled in
    auth_id: authID,
    name: givenName,
    coolness: 0,
    spaghetness: 0,
    favourite_duck: duckGenerator(authID + givenName), // TO DO - generate randomly from a hash of user's authID + name
    about: 'Write a story about yourself here',
    experience: '',
    profile_pic_url: '',
  }
  const result = await db('users').insert(userData)
  return result
}

export async function getUserByAuthID(auth_id: string) {
  const user = await db('users').where({ auth_id }).first()
  // TO DO - Check if user exists?
  return user as User
}
