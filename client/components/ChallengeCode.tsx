import { ChallengeCode } from '../../models/challenges'

export default function ChallengeCodebox({ code }: ChallengeCode) {
  return (
    <div>
      <div>
        <textarea
          style={{ width: '500px', height: '800px', border: 'solid' }}
          value={code}
          readOnly
        ></textarea>
      </div>
    </div>
  )
}
