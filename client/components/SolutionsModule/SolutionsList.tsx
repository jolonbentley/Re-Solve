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

  return (
    <div>
      {solutionsData.map((solution, index) => {
        return (
          <div key={index} onClick={() => handleClick(index)}>
            <div className="flex items-center">
              <Link to={`/profile/${solution.author_id}`}>
                <img
                  src="/images/user-link-icon.png"
                  alt="user icon"
                  className="pr-2"
                />
              </Link>
              <SolutionCard {...solution} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
