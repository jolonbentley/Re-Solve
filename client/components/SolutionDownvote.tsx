import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import {
  changeToDownvoteOnSolution,
  checkSolutionVote,
  newDownvoteOnSolution,
} from '../apis/apiClient'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export default function SolutionDownvote() {
  const solutionId = useParams().id
  const user = useUser().data

  const { data: check } = useQuery({
    queryKey: [`${solutionId}, ${user?.id} votecheck`],
    queryFn: () => checkSolutionVote(user?.id, solutionId),
  })

  const queryClient = useQueryClient()
  const newDownvote = useMutation({
    mutationFn: () => newDownvoteOnSolution(user?.id, solutionId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${solutionId}, ${user?.id} votecheck`],
      })
    },
    onError: (error) => {
      console.log('Vote Failed', error)
    },
  })

  const changeDownvote = useMutation({
    mutationFn: () => changeToDownvoteOnSolution(user?.id, solutionId),
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
