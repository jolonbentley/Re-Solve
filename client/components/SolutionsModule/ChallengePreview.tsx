import { useQuery } from '@tanstack/react-query'
import { getChallenge } from '../../apis/apiClient'
import HeadingBlock from '../BuildingBlocks/HeadingBlock'
import ChallengeBrief from '../ChallengesMenu/ChallengeBrief'
import PreviewCodebox from './PreviewCodebox'

interface Id {
  id: number
}

export default function ChallengePreview({ id }: Id) {
  // Get challenge information
  const {
    isLoading,
    isError,
    error,
    data: challenge,
  } = useQuery({
    queryKey: ['challenge', id],
    queryFn: () => getChallenge(id),
  })
  if (isLoading) {
    return (
      <span className="loading loading-xs mx-auto mt-4 animate-spin"></span>
    )
  }
  if (isError) {
    return <div>There was an error, {String(error)}</div>
  }
  if (!challenge) {
    return null
  }
  const code = challenge.problem

  return (
    <div className="mb-4 rounded-md border-solid">
      <HeadingBlock>{challenge.title}</HeadingBlock>
      <ChallengeBrief data={challenge}></ChallengeBrief>
      <div className="flex justify-center">
        <PreviewCodebox code={code} />
      </div>
    </div>
  )
}
