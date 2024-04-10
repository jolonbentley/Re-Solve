export interface Solution {
  id: number
  challenge_id: number
  title: string
  date: Date
  body: Text
  author_id: number
  is_published: boolean
  upvotes: number
  downvotes: number
}

export interface SolutionComments {
  id: number
  solution_id: number
  author_id: number
  comment: string
  date: Date
}
