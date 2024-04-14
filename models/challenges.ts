export interface Challenge {
  id: number
  title: string
  date: Date
  brief: string
  hints: string
  problem: string
  author_id: number
  upvotes: number
  downvotes: number
  difficulty: string
}

export interface ChallengeComment {
  id: number
  challenge_id: number
  author_id: number
  comment: string
  date: Date
}

export interface ChallengeCode {
  code: string
}

export interface ChallengeBrief {
  brief: string
}

export interface ChallengeData {
  data: Challenge
}
