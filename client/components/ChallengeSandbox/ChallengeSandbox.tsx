import SandboxEditor from './SandboxEditor'
import { ChallengeCode } from '../../../models/challenges'

export default function ChallengeSandbox({ code }: ChallengeCode) {
  return (
    <div>
      <div style={{ width: '500px', height: '800px' }}>
        <SandboxEditor code={code} />
      </div>
    </div>
  )
}
