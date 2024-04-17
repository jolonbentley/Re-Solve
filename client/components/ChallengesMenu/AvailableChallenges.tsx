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
    error,
    data: challengesData,
  } = useQuery({
    queryKey: ['icompleteChallenges'],
    queryFn: () => getFiveIncompleteChallenges(id),
    enabled: !!id, // Enabled once id exists
  })

  if (isError) {
    return <h1>Error: {String(error)}</h1>
  }

  if (isLoading || !challengesData) {
    return (
      <div className="flex flex-col justify-center">
        <HeadingBlock>Available Challenges</HeadingBlock>
        <span className="mb-4 mt-4 text-center">
          <span className="loading loading-xs mx-auto mt-4 animate-spin"></span>
        </span>
      </div>
    )
  }

  return (
    <div>
      <HeadingBlock>
        <div style={{ paddingBottom: '10px' }}>Available Challenges</div>
      </HeadingBlock>
      {challengesData?.map((challenge, index) => (
        <ChallengeCard key={index} {...challenge} />
      ))}
    </div>
  )
}
