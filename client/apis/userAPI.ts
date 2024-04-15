import request from 'superagent'
import { User } from '../../models/users'

const rootUrl = '/api/v1/users'

export async function getUser({ token }: { token: string }) {
  const user = await request
    .get(`${rootUrl}/getUser`)
    .set('Authorization', `Bearer ${token}`)
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
  return response
}

export async function getUserById(id: number) {
  console.log('api hit,', id)
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}
