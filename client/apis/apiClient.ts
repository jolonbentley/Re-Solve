import request from 'superagent'
import { Challenge } from '../../models/challenges'

const rootUrl = '/api/v1/challenges'

export async function fetchChallenges(): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/all`)
  return res.body
}

// export function getFruits(): Promise<string[]> {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }
