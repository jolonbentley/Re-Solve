import e from 'express'
import { SolutionList } from '../../../models/solutions'

interface Props {
  data: SolutionList[]
  change: (index: number) => void
}

export default function SolutionsList({ data, change }: Props) {
  const solutionsData = data

  const handleClick = (index: number) => {
    change(index)
  }
  return (
    <div>
      <div>
        {' '}
        <table className="table border-separate space-y-6 text-sm text-gray-400">
          <thead className="bg-yellow-500 text-white">
            <tr>
              <th className="p-3">Solver</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Upvote</th>
              <th className="p-3 text-left">Downvotes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {solutionsData.map((solution, index) => (
              <tr key={solution.id} className="bg-blue-200 lg:text-black">
                <td className="p-3">
                  <span className="rounded-md bg-blue-400 px-2 text-gray-50">
                    {solution.title}
                  </span>
                </td>
                <td className="p-3">{solution.date}</td>
                <td className="p-3">{solution.upvotes}</td>
                <td className="p-3">{solution.downvotes}</td>
                <td>
                  <button className="btn" onClick={() => handleClick(index)}>
                    ➡
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
