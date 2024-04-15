import { useParams } from 'react-router-dom'
import { SolutionDisBox } from '../components/SolutionDiscussionBox'
import SolutionsModule from '../components/SolutionsModule/SolutionsModule'
import ChallengeContainer from '../components/BuildingBlocks/ChallengeContainer'
import { useQuery } from '@tanstack/react-query'
import { getChallenge } from '../apis/apiClient'
import ChallengePreview from '../components/SolutionsModule/ChallengePreview'
import HeadingBlock from '../components/BuildingBlocks/HeadingBlock'

export default function Solution() {
  const id = Number(useParams().id)
  
  // Get challenge information


  return (
    <ChallengeContainer>
      <ChallengePreview id={id}/>
      <HeadingBlock>Solutions</HeadingBlock>
      <SolutionsModule id={id} />
      <SolutionDisBox />

    </ChallengeContainer>
  
  )
}
