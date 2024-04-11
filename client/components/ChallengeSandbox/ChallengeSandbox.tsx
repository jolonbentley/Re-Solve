import Editor from '@monaco-editor/react'
import SandboxEditor from './SandboxEditor'
import SandboxConsole from './SandboxConsole'

interface ChallengeProps {
  code: string
}

export default function ChallengeSandbox({ code }: ChallengeProps) {
  return (
    <div>
      <div>
        <SandboxEditor code={code} />
      </div>
    </div>
  )
}
