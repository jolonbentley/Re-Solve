import { Editor } from '@monaco-editor/react'
import { ChallengeCode } from '../../models/challenges'
import Upvote from './ChallengeUpvote'
import Downvote from './ChallengeDownvote'

export default function ChallengeCodebox({ code }: ChallengeCode) {
  return (
    <div>
      <div>
        <Editor
          height="50vh"
          width="31rem"
          theme="vs-dark"
          defaultLanguage="typescript"
          value={`//Re:Solve the problematic code below\n${code}`}
          options={{
            fontSize: 16,
            minimap: {
              enabled: code.length > 2000 ? true : false, // This is checking for 2000 characters, not 2000 lines
            },
            contextmenu: true,
            readOnly: true,
            domReadOnly: true,
          }}
        />
      </div>
      <div className="flex justify-evenly py-12">
        <Upvote />
        <Downvote />
      </div>
    </div>
  )
}
