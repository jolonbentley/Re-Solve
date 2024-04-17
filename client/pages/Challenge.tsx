import { useParams } from 'react-router-dom'
import ChallengeBrief from '../components/ChallengesMenu/ChallengeBrief'
import ChallengeCode from '../components/ChallengeCodebox'
import ChallengeSandbox from '../components/ChallengeSandbox/ChallengeSandbox'
import { useQuery } from '@tanstack/react-query'
import { getChallenge } from '../apis/apiClient'
import ChallengeContainer from '../components/BuildingBlocks/ChallengeContainer'
import HeadingBlockWithDate from '../components/BuildingBlocks/HeadingBlockWithDate'

export default function Challenge() {
  const id = Number(useParams().id)

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
    return <span className="loading loading-infinity loading-xs"></span>
  }
  if (isError) {
    return <div>There was an error, {String(error)}</div>
  }
  if (!challenge) {
    return null
  }
  const code = challenge.problem

  return (
    <ChallengeContainer>
      <HeadingBlockWithDate date={challenge.date}>
        Challenge: {challenge.title}
      </HeadingBlockWithDate>
      <ChallengeBrief data={challenge} />
      <div className="flex flex-row justify-center gap-2">
        <label className="mb-2 text-center text-lg font-bold">
          Enter your Solution
          <ChallengeSandbox code={code} />
        </label>
        <label className="mb-2 text-center text-lg font-bold">
          Challenge Preview
          <ChallengeCode code={code} />
        </label>
      </div>
    </ChallengeContainer>
  )
}
