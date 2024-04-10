import connection from './connection'
import { Challenge } from '../../models/challenges.ts'
import { Solution, SolutionComments } from '../../models/solutions.ts'

const db = connection

export async function updateSolutionId(id: number, solutionId: number) {
  return db('solution_comments')
    .where('id', id)
    .update({ solution_id: solutionId })
}

export async function updateFeaturedSolutionId(id: number, solutionId: number) {
  return db('featured_solutions')
    .where('id', id)
    .update({ solution_id: solutionId })
}

export async function getAllChallenges() {
  return await db('challenges').select('*')
}

export async function getAllSolutions() {
  return await db('solutions').select('*')
}

export async function getAllSolutionComments() {
  return await db('solution_comments').select('*')
}

export async function saveSolution(data: object): Promise<Solution[]> {
  return await db('solutions').insert([data])
}

export async function updateSolution(id: number, updates: Partial<Solution>) {
  await db('solutions').where('id', id).update(updates)
}

export async function saveComment(data: object): Promise<SolutionComments[]> {
  return await db('solution_comments').insert([data])
}

export async function updateComment(
  id: number,
  updates: Partial<SolutionComments>,
) {
  await db('solution_comments').where('id', id).update(updates)
}
