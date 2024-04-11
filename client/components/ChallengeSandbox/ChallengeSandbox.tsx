import SandboxEditor from './SandboxEditor'
import { ChallengeCode } from '../../../models/challenges'

export default function ChallengeSandbox({ code }: ChallengeCode) {
  console.log(code)
  return (
    <div>
      <div style={{ width: '500px', height: '800px', border: 'solid' }}>
        <SandboxEditor code={code} />
      </div>
    </div>
  )
}
