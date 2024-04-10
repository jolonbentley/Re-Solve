export interface Challenge {
  id: number
  title: string
  date: Date
  brief: Text
  hints: Text
  problem: Text
  author_id: number
  upvotes: number
  downvotes: number
  difficulty: string
}
