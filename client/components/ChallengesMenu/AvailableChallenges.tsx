import HeadingBlock from '../BuildingBlocks/HeadingBlock'
import ChallengeCard from '../BuildingBlocks/ChallengeCard'
import { useQuery } from '@tanstack/react-query'
import { getFiveIncompleteChallenges } from '../../apis/apiClient'
import useUser from '../../hooks/useUser'

export default function AvailableChallenges() {
  const user = useUser().data
  const id = user?.id

  const {
    isLoading,
    isError,
    data: challengesData,
  } = useQuery({
    queryKey: ['icompleteChallenges'],
    queryFn: () => getFiveIncompleteChallenges(id),
    enabled: !!id, // Enabled once id exists
  })
  if (isLoading) {
    return <h1>Loading...ChallengesDataPage</h1>
  }

  if (isError || !challengesData) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <HeadingBlock>Available Challenges</HeadingBlock>
      {challengesData?.map((challenge, index) => (
        <ChallengeCard key={index} {...challenge} />
      ))}
    </div>
  )
}
