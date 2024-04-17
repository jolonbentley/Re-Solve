import connection from './connection'
import { Challenge, ChallengeComment } from '../../models/challenges.ts'
import { Solution, SolutionComment } from '../../models/solutions.ts'
import { User } from '../../models/users.ts'
import { BIND } from 'superagent'

const db = connection

export async function getAllChallenges() {
  return await db('challenges').select('*')
}

export async function getNOffsetChallenges(n: number, offset: number) {
  return await db('challenges')
    .select('*')
    .limit(n)
    .offset(offset)
    .orderBy('date', 'desc')
}

export async function getChallengeById(id: number) {
  return await db('challenges').where('id', id).select('*').first()
}

export async function getSolutionCommentsById(id: number) {
  return await db('solution_comments')
    .join('solutions', 'solution_comments.solution_id', 'solutions.id')
    .join('users', 'users.id', 'solution_comments.author_id')
    .where('solution_comments.solution_id', id)
    .select(
      'solution_comments.id',
      'users.name',
      'solution_comments.comment',
      'solution_comments.date',
      'solution_comments.author_id',
    )
}

export async function getSolutionByChallengeIdAndAuthorId(challengeId: string, authorId: string) {
  return await db('solutions').where('author_id', authorId).andWhere('challenge_id', challengeId).first()
}

export async function getAllSolutions() {
  return await db('solutions').select('*')
}

export async function getAllSolutionComments() {
  return await db('solution_comments').select('*')
}

export async function getAllChallengeComments() {
  return await db('challenge_comments').select('*')
}

export async function getAllUsers() {
  return await db('users').select('*')
}

export async function saveSolution(data: object): Promise<Solution[]> {
  return await db('solutions').insert([data])
}

export async function updateSolution(id: number, updates: Partial<Solution>) {
  await db('solutions').where('id', id).update(updates)
}

export async function updateSolutionVersion2ByLewis(challengeId: string, authorId: string, newSolution: Solution) {
  const result = await db('solutions').where('challenge_id', challengeId).andWhere('author_id', authorId).update({
    body: newSolution.body,
    date: newSolution.date
  })
  return result
}

export async function saveSolutionComment(
  data: object,
): Promise<SolutionComment[]> {
  return await db('solution_comments').insert([data])
}

export async function updateSolutionComment(
  id: number,
  updates: Partial<SolutionComment>,
) {
  await db('solution_comments').where('id', id).update(updates)
}

export async function saveChallengeComment(
  data: object,
): Promise<ChallengeComment> {
  return await db('challenge_comments').insert([data])
}

export async function updateChallengeComment(
  id: number,
  updates: Partial<ChallengeComment>,
) {
  return await db('challenge_comments').where('id', id).update(updates)
}

export async function getCompletedChallenges(id: number) {
  return await db('challenges')
    .join('solutions', 'challenges.id', 'solutions.challenge_id')
    .where('solutions.author_id', id)
    .select('challenges.*')
}

export async function getSolutionsForChallenge(id: number) {
  return await db('challenges')
    .join('solutions', 'challenges.id', 'solutions.challenge_id')
    .where('solutions.challenge_id', id)
    .select('solutions.*')
    .join('users', 'solutions.author_id', 'users.id')
    .select('users.name as author')
}

export async function getIncompleteChallenges(id: number) {
  return await db('challenges')
    .whereNotIn('id', function () {
      this.select('challenge_id').from('solutions').where('author_id', id)
    })
    .select('*')
}

// export async function updateSolutionId(id: number, solutionId: number) {
//   return db('solution_comments')
//     .where('id', id)
//     .update({ solution_id: solutionId })
// }

// export async function updateFeaturedSolutionId(id: number, solutionId: number) {
//   return db('featured_solutions')
//     .where('id', id)
//     .update({ solution_id: solutionId })
// }

export async function submitNewChallenge(data: object) {
  return await db('challenges').insert([data])
}

export async function getUserById(id: number) {
  return await db('users').where('id', id).select('*').first()
}

export async function updateUserProfile(id: number, updates: Partial<User>) {
  return await db('users').where('id', id).update(updates)
}

export async function checkForSolution(
  user: number,
  challenge: number,
): Promise<boolean> {
  const result = await db('solutions')
    .where('author_id', user)
    .select('*')
    .where('challenge_id', challenge)
    .count('author_id as count')
    .first()
  return result.count > 0
}

export async function getFiveCompletedChallenges(id: number) {
  return await db('challenges')
    .join('solutions', 'challenges.id', 'solutions.challenge_id')
    .where('solutions.author_id', id)
    .select('challenges.*')
    .orderBy('id', 'desc')
    .limit(5)
}

export async function getFiveIncompleteChallenges(id: number) {
  return await db('challenges')
    .whereNotIn('id', function () {
      this.select('challenge_id').from('solutions').where('author_id', id)
    })
    .select('*')
    .orderBy('id', 'desc')
    .limit(5)
}

export async function checkForUserVote(user: number, challenge: number) {
  const result = await db('user_challenge_votes')
    .where({ user_id: user, challenge_id: challenge })
    .select('vote')
    .first()
  return result
}

export async function newUpvote(user: number, challenge: number) {
  const updateRecords = await db('user_challenge_votes').insert({
    user_id: user,
    challenge_id: challenge,
    vote: 1,
  })

  const updateChallenge = await db('challenges')
    .where('id', challenge)
    .increment('upvotes', 1)
  return { updateRecords, updateChallenge }
}

export async function changeToUpvote(user: number, challenge: number) {
  const updateRecords = await db('user_challenge_votes')
    .where({
      user_id: user,
      challenge_id: challenge,
    })
    .update('vote', 1)

  const updateChallenge = await db('challenges')
    .where('id', challenge)
    .increment('upvotes', 1)
    .decrement('downvotes', 1)
  return { updateRecords, updateChallenge }
}

export async function newDownvote(user: number, challenge: number) {
  const updateRecords = await db('user_challenge_votes').insert({
    user_id: user,
    challenge_id: challenge,
    vote: -1,
  })

  const updateChallenge = await db('challenges')
    .where('id', challenge)
    .increment('downvotes', 1)
  return { updateRecords, updateChallenge }
}

export async function changeToDownvote(user: number, challenge: number) {
  const updateRecords = await db('user_challenge_votes')
    .where({
      user_id: user,
      challenge_id: challenge,
    })
    .update('vote', -1)

  const updateChallenge = await db('challenges')
    .where('id', challenge)
    .increment('downvotes', 1)
    .decrement('upvotes', 1)
  return { updateRecords, updateChallenge }
}

export async function checkForUserVoteSolution(user: number, solution: number) {
  const result = await db('user_solution_votes')
    .where({ user_id: user, solution_id: solution })
    .select('vote')
    .first()
  return result
}

export async function newUpvoteSolution(user: number, solution: number) {
  const updateRecords = await db('user_solution_votes').insert({
    user_id: user,
    solution_id: solution,
    vote: 1,
  })

  const updateSolution = await db('solutions')
    .where('id', solution)
    .increment('upvotes', 1)
  return { updateRecords, updateSolution }
}

export async function changeToUpvoteSolution(user: number, solution: number) {
  const updateRecords = await db('user_solution_votes')
    .where({
      user_id: user,
      solution_id: solution,
    })
    .update('vote', 1)

  const updateSolution = await db('solutions')
    .where('id', solution)
    .increment('upvotes', 1)
    .decrement('downvotes', 1)
  return { updateRecords, updateSolution }
}

export async function newDownvoteSolution(user: number, solution: number) {
  const updateRecords = await db('user_solution_votes').insert({
    user_id: user,
    solution_id: solution,
    vote: -1,
  })

  const updateSolution = await db('solutions')
    .where('id', solution)
    .increment('downvotes', 1)
  return { updateRecords, updateSolution }
}

export async function changeToDownvoteSolution(user: number, solution: number) {
  const updateRecords = await db('user_solution_votes')
    .where({
      user_id: user,
      solution_id: solution,
    })
    .update('vote', -1)

  const updateSolution = await db('solutions')
    .where('id', solution)
    .increment('downvotes', 1)
    .decrement('upvotes', 1)
  return { updateRecords, updateSolution }
}
