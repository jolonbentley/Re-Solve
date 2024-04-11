import { useParams } from 'react-router-dom'
import ChallengeBrief from '../components/ChallengeBrief'
import ChallengeCode from '../components/ChallengeCode'
import ChallengeSandbox from '../components/ChallengeSandbox/ChallengeSandbox'
import { useQuery } from '@tanstack/react-query'
import { getChallenge } from '../apis/apiClient'

export default function Challenge() {
  const id = Number(useParams().id)

  const {
    isLoading,
    isError,
    error,
    data: challenge,
  } = useQuery({
    queryKey: ['challenge'],
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
    <div>
      <h1>Challenge: {challenge.title}</h1>
      <ChallengeBrief data={challenge} />
      <ChallengeCode code={code} />
      <ChallengeSandbox code={code} />
    </div>
  )
}
