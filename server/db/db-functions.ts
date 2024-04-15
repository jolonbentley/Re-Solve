import connection from './connection'
import { Challenge, ChallengeComment } from '../../models/challenges.ts'
import { Solution, SolutionComment } from '../../models/solutions.ts'
import { User } from '../../models/users.ts'
import { BIND } from 'superagent'

const db = connection

export async function getAllChallenges() {
  return await db('challenges').select('*')
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
    )
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
): Promise<Boolean> {
  const result = await db('solutions')
    .where('author_id', user)
    .select('*')
    .where('challenge_id', challenge)
    .count('author_id as count')
    .first()
  return result.count > 0
}
