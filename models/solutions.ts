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
