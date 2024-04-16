import request from 'superagent'
import { Challenge } from '../../models/challenges'

const rootUrl = '/api/v1'

export async function fetchChallenges(): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/challenges`)
  return res.body
}

export async function fetchSolutionDisBox(id: number) {
  const res = await request.get(`${rootUrl}/solutions/comments/${id}`)
  return res.body
}

// export async function addSolutionDisBox(
//   comment: SolutionComment,
// ): Promise<SolutionComment[]> {
//   const res = await request
//     .post(`${rootUrl}/solutions/comments`)
//     .send({ comment })
//   return res.body
// }

export async function addSolutionDisBox(commentData: object) {
  const res = await request
    .post(`${rootUrl}/solutions/comments`)
    .send(commentData)
  return res.body
}

// export function getFruits(): Promise<string[]> {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }

export async function getCompletedChallenges(id: number): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/challenges/completed/${id}`)
  return res.body
}

// export async function getCompletedChallengesByUserId(
//   userId: number,
// ): Promise<Challenge[]> {
//   const res = await request.get(`${rootUrl}/challenges/completed/${userId}`)

//   return res.body
// }

export async function getFiveCompletedChallenges(
  id: number,
): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/challenges/fivecompleted/${id}`)
  return res.body
}

export async function getChallenge(id: number) {
  const res = await request.get(`${rootUrl}/challenges/${id}`)
  return res.body
}


export async function getChallengeSolutions(id: number) {
  const res = await request.get(`${rootUrl}/solutions/challengesolution/${id}`)
  return res.body
}

export async function getIncompleteChallenges(
  id: number,
): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/challenges/incomplete/${id}`)
  return res.body
}

export async function getFiveIncompleteChallenges(
  id: number,
): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/challenges/fiveincomplete/${id}`)
  return res.body
}

export async function getPageOfChallenges( pageNo: number, pageSize: number ): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/challenges/page/${pageNo}/${pageSize}`)
  return res.body
}

export async function submitSolution(data) {
  const res = await request.post(`${rootUrl}/solutions/submit`).send(data)
  return res.body
}

export async function submitProblem(data) {
  const res = await request.post(`${rootUrl}/challenges/submit`).send(data)
  return res.body
}
