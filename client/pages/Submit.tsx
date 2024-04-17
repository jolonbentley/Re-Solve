import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { submitProblem } from '../apis/apiClient'
import useUser from '../hooks/useUser'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

export default function Submit() {
  const [submission, setSubmission] = useState({
    title: '',
    brief: '',
    hints: '',
    difficulty: 'Easy',
    problem: '',
    author_id: Number(''),
  })

  const user = useUser().data

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data) => submitProblem(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['solutions', 'AllChallenges'],
      })
      // add redirect to home page
    },
    onError: (error) => {
      console.log('Submission Failed', error)
    },
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    mutation.mutate(submission)
  }

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.currentTarget
    setSubmission((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget
    setSubmission((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (user) {
      setSubmission((prev) => ({ ...prev, author_id: user.id }))
    }
  }, [user])

  return (
    <div className="form-container bg-black-800 mx-auto max-w-md rounded-md p-8 shadow-md">
      <h2 className="mb-6 text-center text-2xl font-semibold text-white">
        Submit Your New Problem
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="Title"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            Title
          </label>
          <input
            onChange={handleChange}
            name="title"
            value={submission.title}
            required
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          ></input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Brief"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            Brief
          </label>
          <input
            onChange={handleChange}
            name="brief"
            value={submission.brief}
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          ></input>{' '}
        </div>

        <div className="mb-4">
          <label
            htmlFor="Hints"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            Hints
          </label>
          <input
            onChange={handleChange}
            name="hints"
            value={submission.hints}
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          ></input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Difficulty"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            Difficulty
          </label>
          <select
            onChange={handleSelect}
            name="difficulty"
            value={submission.difficulty}
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Problem"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            Problem
          </label>
          <textarea
            onChange={handleChange}
            placeholder="Code"
            name="problem"
            value={submission.problem}
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          ></textarea>
        </div>

        <div>
          <Link to="">
            <button
              type="submit"
              className="btn bg-accent text-accent-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-gray-400"
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
