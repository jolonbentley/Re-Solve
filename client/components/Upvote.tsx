import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import {
  changeToUpvoteOnChallenge,
  checkChallengeVote,
  newUpvoteOnChallenge,
} from '../apis/apiClient'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export default function Upvote() {
  const challengeId = useParams().id
  const user = useUser().data

  console.log(user)

  const { data: check } = useQuery({
    queryKey: [`${challengeId}, ${user?.id} votecheck`],
    queryFn: () => checkChallengeVote(user?.id, challengeId),
  })

  const queryClient = useQueryClient()
  const newUpvote = useMutation({
    mutationFn: () => newUpvoteOnChallenge(user?.id, challengeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${challengeId}, ${user?.id} votecheck`],
      })
    },
    onError: (error) => {
      console.log('Vote Failed', error)
    },
  })

  const changeUpvote = useMutation({
    mutationFn: () => changeToUpvoteOnChallenge(user?.id, challengeId),
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
      console.log('new upvote recording')
      newUpvote.mutate()
    } else if (check.vote === 1) {
      console.log('you already upvoted')
      return
    } else if (check.vote === -1) {
      console.log('change to upvote')
      changeUpvote.mutate()
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Upvote</button>
    </div>
  )
}
