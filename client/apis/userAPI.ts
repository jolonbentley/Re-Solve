import request from 'superagent'
import { User } from '../../models/users'

const rootUrl = '/api/v1/users'

export async function getUser({ token }: { token: string }) {
  const user = await request
    .get(`${rootUrl}/getUser`)
    .set('Authorization', `Bearer ${token}`)
  console.log(user)
  return user.body as User
}

export async function registerNewUser({
  token,
  name,
}: {
  token: string
  name: string | undefined
}) {
  const response = await request
    .post(`${rootUrl}/addUser`)
    .send({ name })
    .set('Authorization', `Bearer ${token}`)
  console.log(response)
  return response
}

export async function getUserById(id: number) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function updateUserProfile(data) {
  const res = await request.patch(`${rootUrl}/edit`).send(data)
  return res.body
}
