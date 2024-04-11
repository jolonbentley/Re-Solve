import db from '../connection.ts'
import { User } from '../../../models/users.ts'

export async function addUser(authID: string, givenName: string) {
  // Check if user already exists in the DB.
  // -- TO DO

  // Add the new user to the DB.
  const userData = {
    // id: 1, primary key is automatically filled in
    auth_id: authID,
    name: givenName,
    coolness: 0,
    spaghetness: 0,
    favourite_duck: 'Scaup', // TO DO - generate randomly from a hash of user's authID + name
    about: 'Write a story about yourself here', 
    experience: '',
    profile_pic_url:
      '',
  } 
  const result = await db('users').insert(userData)
  return result
}

export async function getUserByAuthID(auth_id: string) {
  const user = await db('users').where({ auth_id }).first()
  // TO DO - Check if user exists
  return user as User
}
