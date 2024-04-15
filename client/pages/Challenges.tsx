import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchChallenges } from '../apis/apiClient'
import HeadingBlock from '../components/BuildingBlocks/HeadingBlock'
import ChallengeCard from '../components/BuildingBlocks/ChallengeCard'
import GenericContainer from '../components/BuildingBlocks/GenericContainer'

export default function Challenges() {
  const {
    isLoading,
    isError,
    data: challengesData,
  } = useQuery({
    queryKey: ['AllChallenges'],
    queryFn: () => fetchChallenges(),
  })
  if (isLoading) {
    return <h1>Loading...ChallengesDataPage</h1>
  }

  if (isError || !challengesData) {
    return <h1>Error</h1>
  }  
  
  return (
    <GenericContainer>
      <HeadingBlock>
        List of All Challenges
      </HeadingBlock>
      {challengesData?.map((challenge, index) => ( <ChallengeCard key={index} { ...challenge }/>))}
    </GenericContainer>
  )
}
