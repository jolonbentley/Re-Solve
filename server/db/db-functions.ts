import connection from './connection'
import { Challenge } from '../../models/challenges.ts'
import { Solution } from '../../models/solutions.ts'

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

export async function saveSolution(data: object): Promise<Solution[]> {
  return await db('solutions').insert([data])
}
