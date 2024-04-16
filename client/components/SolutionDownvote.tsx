import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import {
  changeToDownvoteOnSolution,
  checkSolutionVote,
  newDownvoteOnSolution,
} from '../apis/apiClient'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { DisplaySolution } from '../../models/solutions'
import { useEffect, useState } from 'react'

export default function SolutionDownvote({ data }: DisplaySolution) {
  const [buttonColor, setButtonColor] = useState('bg-gray-300')
  const solutionId = data.id
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

  useEffect(() => {
    if (check === null || check === undefined) {
      setButtonColor('bg-gray-300')
    } else if (check.vote === -1) {
      setButtonColor('bg-accent')
    } else {
      setButtonColor('bg-secondary')
    }
  }, [check])

  return (
    <div>
      <button
        className={`btn ${buttonColor} text-accent-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-gray-400`}
        onClick={handleClick}
      >
        Downvote
      </button>
    </div>
  )
}
