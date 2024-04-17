import { useParams } from 'react-router-dom'
import ChallengeBrief from '../components/ChallengesMenu/ChallengeBrief'
import ChallengeCode from '../components/ChallengeCodebox'
import ChallengeSandbox from '../components/ChallengeSandbox/ChallengeSandbox'
import { useQuery } from '@tanstack/react-query'
import { getChallenge } from '../apis/apiClient'
import ChallengeContainer from '../components/BuildingBlocks/ChallengeContainer'
import HeadingBlock from '../components/BuildingBlocks/HeadingBlock'
import HeadingBlockSecondary from '../components/BuildingBlocks/HeadingBlockSecondary'
import Downvote from '../components/ChallengeDownvote'
import Upvote from '../components/ChallengeUpvote'
import ChallengeUpvote from '../components/ChallengeUpvote'
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
    return <>Loading...</>
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
      <HeadingBlockWithDate date={challenge.date}>Challenge: {challenge.title}</HeadingBlockWithDate>
      <ChallengeBrief data={challenge} />
      <div className="flex flex-row justify-center">
        <label className='text-center font-bold text-lg mb-2'>
          Enter your Solution
          <ChallengeSandbox code={code} challengeId={String(id)} />
        </label> 
        <label className='text-center font-bold text-lg mb-2'>
          Challenge Preview
          <ChallengeCode code={code} />
        </label>
      </div>
    </ChallengeContainer>
  )
}
