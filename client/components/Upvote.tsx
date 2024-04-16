import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import { checkChallengeVote } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'

export default function Upvote() {
  const challengeId = useParams().id
  const userId = useUser().data

  console.log(challengeId, userId?.id)

  const { data: check } = useQuery({
    queryKey: ['votecheck', challengeId, userId],
    queryFn: () => checkChallengeVote(userId, challengeId),
  })

  console.log(check)

  return (
    <div>
      <button>Upvote</button>
      <button>Downvote</button>
    </div>
  )
}
