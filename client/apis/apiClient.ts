import request from 'superagent'
import { Challenges } from '../../models/challenges'

const rootUrl = 'api/v1/challenges'

export async function fetchChallenges(): Promise<Challenges[]> {
  const res = await request.get(rootUrl)
  return res.body
}

// export function getFruits(): Promise<string[]> {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }
