import { ChallengeData } from '../../models/challenges'

export default function ChallengeBrief({ data }: ChallengeData) {
  return (
    <div style={{ width: '500px', height: '75px', border: 'solid' }}>
      <div>Challenge: {data.brief}</div>
      <div>
        <p>Hint: {data.hints}</p>
      </div>
    </div>
  )
}
