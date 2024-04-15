import e from 'express'
import { SolutionList } from '../../../models/solutions'
import SolutionCard from './SolutionCard'
import { Link } from 'react-router-dom'

interface Props {
  data: SolutionList[]
  change: (index: number) => void
}

export default function SolutionsList({ data, change }: Props) {
  const solutionsData = data

  const handleClick = (index: number) => {
    change(index)
  }
  console.log('soldata 🧙🏻', solutionsData)
  return (
    <div>
      {solutionsData.map((solution, index) => {
        return (
          <div key={index} onClick={() => handleClick(index)}>
            <SolutionCard  {...solution} />
          </div>
        )
      })}
    </div>
  )
}
