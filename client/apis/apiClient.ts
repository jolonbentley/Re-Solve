import request from 'superagent'
import { Challenge } from '../../models/challenges'
import { Solution } from '../../models/solutions'

const rootUrl = '/api/v1'

export async function fetchChallenges(): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/challenges`)
  return res.body
}

export async function fetchSolutionDisBox(id: number) {
  const res = await request.get(`${rootUrl}/solutions/comments/${id}`)
  return res.body
}

export async function addSolutionDisBox(commentData: object) {
  const res = await request
    .post(`${rootUrl}/solutions/comments`)
    .send(commentData)
  return res.body as Solution
}

export async function getSolutionByChallengeIdAndAuthorId(challengeId: string, authorId: number | undefined) {
  let authorIdToUse = ""
  if (authorId) {
    authorIdToUse = String(authorId)
  } 
  const res = await request
    .get(`${rootUrl}/solutions/${challengeId}/${authorIdToUse}`)
  if (res.body == null || res.body == undefined) {
    return {body: ""}
  }
  return res.body
}

export async function getCompletedChallenges(id: number): Promise<Challenge[]> {
  const res = await request.get(`${rootUrl}/challenges/completed/${id}`)
  return res.body
}

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
