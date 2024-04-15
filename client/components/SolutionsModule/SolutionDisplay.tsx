import { Editor } from '@monaco-editor/react'
import { DisplaySolution } from '../../../models/solutions'

export default function SolutionDisplay({ data }: DisplaySolution) {
  return (
    <div className="mt-2">
      {data ? (
        <Editor
          height="70vh"
          width="100%"
          theme="vs-dark"
          defaultLanguage="typescript"
          value={`${data.body}`}
          options={{
            fontSize: 16,
            minimap: {
              enabled: data.body.length > 200 ? true : false,
            },
            contextmenu: true,
            readOnly: true,
            domReadOnly: true,
          }}
        />
      ) : (
        <p>No Solutions for this challenge found</p>
      )}
    </div>
  )
}
