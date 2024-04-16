import request from 'superagent'
import { Challenge } from '../../models/challenges'
import { Solution } from '../../models/solutions'
import { SolutionComment } from '../../models/solutions'

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

export async function submitSolution(data) {
  const res = await request.post(`${rootUrl}/solutions/submit`).send(data)
  return res.body
}

export async function submitProblem(data) {
  const res = await request.post(`${rootUrl}/challenges/submit`).send(data)
  return res.body
}

export async function checkChallengeVote(userId: number, challengeId: number) {
  const res = await request.get(
    `${rootUrl}/challenges/voteCheck/${userId}/${challengeId}`,
  )
  return res.body
}

export async function newUpvoteOnChallenge(
  userId: number,
  challengeId: number,
) {
  const res = await request.post(
    `${rootUrl}/challenges/newUpvote/${userId}/${challengeId}`,
  )
  return res.body
}

export async function changeToUpvoteOnChallenge(
  userId: number,
  challengeId: number,
) {
  const res = await request.patch(
    `${rootUrl}/challenges/changeUpvote/${userId}/${challengeId}`,
  )
  return res.body
}

export async function newDownvoteOnChallenge(
  userId: number,
  challengeId: number,
) {
  const res = await request.post(
    `${rootUrl}/challenges/newDownvote/${userId}/${challengeId}`,
  )
  return res.body
}

export async function changeToDownvoteOnChallenge(
  userId: number,
  challengeId: number,
) {
  const res = await request.patch(
    `${rootUrl}/challenges/changeDownvote/${userId}/${challengeId}`,
  )
  return res.body
}

export async function checkSolutionVote(userId: number, solutionId: number) {
  const res = await request.get(
    `${rootUrl}/solutions/voteCheck/${userId}/${solutionId}`,
  )
  return res.body
}

export async function newUpvoteOnSolution(userId: number, solutionId: number) {
  const res = await request.post(
    `${rootUrl}/solutions/newUpvote/${userId}/${solutionId}`,
  )
  return res.body
}

export async function changeToUpvoteOnSolution(
  userId: number,
  solutionId: number,
) {
  const res = await request.patch(
    `${rootUrl}/solutions/changeUpvote/${userId}/${solutionId}`,
  )
  return res.body
}

export async function newDownvoteOnSolution(
  userId: number,
  solutionId: number,
) {
  const res = await request.post(
    `${rootUrl}/solutions/newDownvote/${userId}/${solutionId}`,
  )
  return res.body
}

export async function changeToDownvoteOnSolution(
  userId: number,
  solutionId: number,
) {
  const res = await request.patch(
    `${rootUrl}/solutions/changeDownvote/${userId}/${solutionId}`,
  )
  return res.body
}
