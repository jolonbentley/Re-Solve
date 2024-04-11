import request from "superagent";
import { User } from "../../models/users";

const rootUrl = "/api/v1/users"

export async function getUser({ token } : { token: string }) {
  console.log('getting user, token: ', token)
  const token2 = token
  console.log('🧙🏻', token2)
  const user = await request.get(`${rootUrl}/getUser`)
    .send({ token }) 
    .set('Authorization', `Bearer ${token}`)
  // TO DO - Check response was successful
  return user.body as User
}

export async function registerUser({ token } : { token: string }) {
  const response = await request.post(`${rootUrl}/addUser`)
    .send({ token })
  return response
}