import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import {
  changeToUpvoteOnSolution,
  checkSolutionVote,
  newUpvoteOnSolution,
} from '../apis/apiClient'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export default function SolutionUpvote() {
  const solutionId = useParams().id
  const user = useUser().data

  console.log(user)

  const { data: check } = useQuery({
    queryKey: [`${solutionId}, ${user?.id} votecheck`],
    queryFn: () => checkSolutionVote(user?.id, solutionId),
  })

  const queryClient = useQueryClient()
  const newUpvote = useMutation({
    mutationFn: () => newUpvoteOnSolution(user?.id, solutionId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${solutionId}, ${user?.id} votecheck`],
      })
    },
    onError: (error) => {
      console.log('Vote Failed', error)
    },
  })

  const changeUpvote = useMutation({
    mutationFn: () => changeToUpvoteOnSolution(user?.id, solutionId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${solutionId}, ${user?.id} votecheck`],
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
