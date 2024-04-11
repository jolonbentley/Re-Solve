import { useParams } from 'react-router-dom'
import ChallengeBrief from '../components/ChallengeBrief'
import ChallengeCode from '../components/ChallengeCode'
import ChallengeSandbox from '../components/ChallengeSandbox/ChallengeSandbox'
import { useSpecificChallenge } from '../hooks/useChallenges'

export default function Challenge() {
  const id = useParams().id

  const challenge = useSpecificChallenge(id)
  console.log(challenge)

  return (
    <div>
      <h1>Welcome to Re:Solve Challenge page</h1>
      <ChallengeBrief />
      <ChallengeCode />
      <ChallengeSandbox code={code} />
    </div>
  )
}

const code = 'console.log("Hellow World!")'
