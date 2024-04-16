import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import {
  changeToDownvoteOnChallenge,
  checkChallengeVote,
  newDownvoteOnChallenge,
} from '../apis/apiClient'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export default function Downvote() {
  const challengeId = useParams().id
  const user = useUser().data

  const { data: check } = useQuery({
    queryKey: [`${challengeId}, ${user?.id} votecheck`],
    queryFn: () => checkChallengeVote(user?.id, challengeId),
  })

  const queryClient = useQueryClient()
  const newDownvote = useMutation({
    mutationFn: () => newDownvoteOnChallenge(user?.id, challengeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${challengeId}, ${user?.id} votecheck`],
      })
    },
    onError: (error) => {
      console.log('Vote Failed', error)
    },
  })

  const changeDownvote = useMutation({
    mutationFn: () => changeToDownvoteOnChallenge(user?.id, challengeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${challengeId}, ${user?.id} votecheck`],
      })
    },
    onError: (error) => {
      console.log('Vote Failed', error)
    },
  })

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    if (!check) {
      console.log('new downvote recording')
      newDownvote.mutate()
    } else if (check.vote === -1) {
      console.log('you already downvoted')
      return
    } else if (check.vote === 1) {
      console.log('change to downvote')
      changeDownvote.mutate()
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Downvote</button>
    </div>
  )
}
