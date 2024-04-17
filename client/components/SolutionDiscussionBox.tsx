import React, { FormEvent, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchSolutionDisBox, addSolutionDisBox } from '../apis/apiClient'
import { Link, useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import HeadingBlock from './BuildingBlocks/HeadingBlock'

export function SolutionDisBox() {
  const [newComment, setNewComment] = useState('')
  const idString = useParams().id as string
  const idNumber = parseInt(idString)
  const user = useUser().data
  const queryClient = useQueryClient()

  const {
    isLoading,
    isError,
    data: solutionDisBox,
  } = useQuery({
    queryKey: ['comments'],
    queryFn: () => fetchSolutionDisBox(idNumber),
  })

  const mutation = useMutation({
    mutationFn: (comment) => addSolutionDisBox(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const comment = {
      comment: newComment,
      solution_id: idNumber,
      author_id: user.id,
    }
    mutation.mutate(comment)
    setNewComment('')
  }

  if (isLoading) {
    return <h1>Loading...SolutionDisBoxPage</h1>
  }

  if (isError || !solutionDisBox) {
    return <h1>Error</h1>
  }

  const formatDate = (solution) => {
    const jsDate = new Date(solutionDisBox[0].date)
    const formattedDate = `${jsDate.getDate()}/${jsDate.getMonth()}/${jsDate.getFullYear()}`
    return formattedDate
  }

  return (
    <div>
      <div>
        <input
          className=" input input-bordered w-full max-w-xs"
          type="text"
          value={newComment}
          onChange={handleChange}
          placeholder="Add new comment"
        />
        <button
          className="btn bg-accent text-accent-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-gray-300"
          onClick={handleSubmit}
        >
          Add Comment
        </button>
      </div>
      {solutionDisBox.map((solution) => (
        <div
          key={solution.id}
          className="my-2 grid grid-cols-4 items-center justify-items-center rounded-2xl bg-secondary p-4 text-center text-secondary-content drop-shadow-md transition-all duration-300 hover:bg-accent hover:text-accent-content hover:drop-shadow-xl"
        >
          <span className="text-lg font-bold">
            <Link to={`/profile/${solution.author_id}`}>{solution.name}</Link>
          </span>
          <span className="text-lg font-bold">{formatDate(solution)}</span>
          <span className="text-lg font-bold">{solution.comment}</span>
        </div>
      ))}
    </div>
  )
}

export default SolutionDisBox
