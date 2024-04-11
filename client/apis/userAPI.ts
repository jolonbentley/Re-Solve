import request from "superagent";
import { User } from "../../models/users";

const rootUrl = "/api/v1/users"

export async function getUser(authID: string) {
  const user = await request.get(`${rootUrl}/getUser`)
    .send({ authID }) // <- TO DO - Get from input
  // TO DO - handle errors
  return user.body as User
}

export async function registerUser(authID: string, name: string) {
  const response = await request.post(`${rootUrl}/addUser`)
    .send({ authID, name })
  return response
}