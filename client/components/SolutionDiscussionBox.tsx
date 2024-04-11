import React, { FormEvent, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchSolutionDisBox, addSolutionDisBox } from '../apis/apiClient'

export function SolutionDisBox() {
  const [newComment, setNewComment] = useState('')
  const queryClient = useQueryClient()

  const {
    isLoading,
    isError,
    data: solutionDisBox,
  } = useQuery({
    queryKey: ['solutions'],
    queryFn: () => fetchSolutionDisBox(),
  })

  const mutation = useMutation({
    mutationFn: (comment: { comment: string }) => addSolutionDisBox(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['solutions'] })
    },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutation.mutate({ comment: newComment })
    setNewComment('')
  }

  if (isLoading) {
    return <h1>Loading...SolutionDisBoxPage</h1>
  }

  if (isError || !solutionDisBox) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <div>
        <input
          className=" text-gray-400"
          type="text"
          value={newComment}
          onChange={handleChange}
          placeholder="Add new comment"
        />
        <button className="bn5" onClick={handleSubmit}>
          Add Comment
        </button>
      </div>
      <table className="table border-separate space-y-6 text-sm text-gray-400">
        <thead className="bg-yellow-500 text-white">
          <tr>
            <th className="p-3 text-left">Comment</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {solutionDisBox.map((solution) => (
            <tr key={solution.id} className="bg-blue-200 lg:text-black">
              <td className="p-3">{solution.comment}</td>
              <td className="p-3">{solution.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SolutionDisBox
