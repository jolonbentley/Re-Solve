import connection from './connection'

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
