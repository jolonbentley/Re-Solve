import { Editor } from '@monaco-editor/react'
import { ChallengeCode } from '../../models/challenges'

export default function ChallengeCodebox({ code }: ChallengeCode) {
  return (
    <div>
      <div>
        <Editor
          height="50vh"
          width="30rem"
          theme="vs-dark"
          defaultLanguage="typescript"
          value={`//Re:Solve the problematic code below\n${code}`}
          options={{
            fontSize: 16,
            minimap: {
              enabled: code.length > 200 ? true : false,
            },
            contextmenu: true,
            readOnly: true,
            domReadOnly: true,
          }}
        />
      </div>
    </div>
  )
}
