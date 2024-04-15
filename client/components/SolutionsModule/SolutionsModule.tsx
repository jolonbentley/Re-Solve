import { useQuery } from '@tanstack/react-query'
import SolutionDisplay from './SolutionDisplay'
import SolutionsList from './SolutionsList'
import { getChallengeSolutions } from '../../apis/apiClient'
import { useState } from 'react'

interface Id {
  id: number
}

export default function SolutionsModule({ id }: Id) {
  const [output, setOutput] = useState(0)

  const {
    isLoading,
    isError,
    error,
    data: solutions,
  } = useQuery({
    queryKey: ['solutions', id],
    queryFn: () => getChallengeSolutions(id),
  })
  if (isLoading) {
    return <>Loading...</>
  }
  if (isError) {
    return <div>There was an error, {String(error)}</div>
  }
  if (!solutions) {
    return null
  }

  const handleState = (index: number) => {
    setOutput(index)
  }

  console.log(solutions)

  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <SolutionsList data={solutions} change={handleState} />
      </div>
      <div className="w-1/2">
        <SolutionDisplay data={solutions[output]} />
      </div>
    </div>
  )
}
