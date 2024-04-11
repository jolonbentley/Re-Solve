import { useParams } from 'react-router-dom'
import { SolutionDisBox } from '../components/SolutionDiscussionBox'
import SolutionsModule from '../components/SolutionsModule/Container'

export default function Solution() {
  const id = Number(useParams().id)

  return (
    <div>
      <h1>Welcome to Re:Solve Solution page</h1>
      <SolutionsModule id={id} />
      <SolutionDisBox />
    </div>
  )
}
