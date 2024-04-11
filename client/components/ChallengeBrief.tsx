import { ChallengeData } from '../../models/challenges'

export default function ChallengeBrief({ data }: ChallengeData) {
  console.log(data)
  return (
    <div style={{ width: '500px', height: '75px', border: 'solid' }}>
      <div>Challenge: {data.brief}</div>
      <div>
        <p>Hint: {data.hints}</p>
      </div>
    </div>
  )
}
