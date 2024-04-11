import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getIncompleteChallenges } from '../apis/apiClient'

// export function AllChallenges() {
//   const dummyChallenges: Challenge[] = [
//     {
//       id: 1,
//       title: 'Addition',
//       date: '2024-02-27 14:00:00',
//       brief: 'A user was asked to write code to add two numbers together.',
//       hints: 'none right now.',
//       problem:
//         'var a = 5\nvar b = 10\n\nfunction addition() {\n  let result = a + b\n  return result\n}',
//       author_id: 1,
//       upvotes: 3,
//       downvotes: 0,
//       difficulty: 'Easy',
//     },
//   ]

export function AllChallenges() {
  const id = 3
  const {
    isLoading,
    isError,
    data: ChallengesData,
  } = useQuery({
    queryKey: ['icompleteChallenges'],
    queryFn: () => getIncompleteChallenges(id),
  })
  if (isLoading) {
    return <h1>Loading...ChallengesDataPage</h1>
  }

  if (isError || !ChallengesData) {
    return <h1>Error</h1>
  }
  return (
    <div>
      <table className="table border-separate space-y-6 text-sm text-gray-400">
        <thead className="bg-yellow-500 text-white">
          <tr>
            <th className="p-3">Challenge</th>
            <th className="p-3 text-left">Difficulty</th>
            <th className="p-3 text-left">Upvote</th>
            <th className="p-3 text-left">Downvotes</th>
            <th>Solutions</th>
          </tr>
        </thead>
        <tbody>
          {ChallengesData.map((challenge) => (
            <tr key={challenge.id} className="bg-blue-200 lg:text-black">
              <td className="p-3">
                <span className="rounded-md bg-blue-400 px-2 text-gray-50">
                  <Link to={`/challenge/${challenge.id}`}>
                    {challenge.title}
                  </Link>
                </span>
              </td>
              <td className="p-3">{challenge.difficulty}</td>
              <td className="p-3">{challenge.upvotes}</td>
              <td className="p-3">{challenge.downvotes}</td>
              <td className="p-3">
                <span className="rounded-md bg-blue-400 px-2 text-gray-50">
                  <Link to={`/solution/${challenge.id}`}>➡</Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllChallenges
