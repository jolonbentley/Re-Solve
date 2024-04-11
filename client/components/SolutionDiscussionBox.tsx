import { useQuery } from '@tanstack/react-query'
import { fetchSolutionDisBox } from '../apis/apiClient'

export function SolutionDisBox() {
  const {
    isLoading,
    isError,
    data: SolutionDisBox,
  } = useQuery({
    queryKey: ['solutions'],
    queryFn: () => fetchSolutionDisBox(),
  })
  if (isLoading) {
    return <h1>Loading...SolutionDisBoxPage</h1>
  }

  if (isError || !SolutionDisBox) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <table className="table border-separate space-y-6 text-sm text-gray-400">
        <thead className="bg-yellow-500 text-white">
          <tr>
            <th className="p-3 text-left">Comment</th>
            <th className="p-3 text-left">date</th>
          </tr>
        </thead>
        <tbody>
          {SolutionDisBox.map((solutions) => (
            <tr key={solutions.id} className="bg-blue-200 lg:text-black">
              <td className="p-3">{solutions.comment}</td>
              <td className="p-3">{solutions.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default SolutionDisBox
