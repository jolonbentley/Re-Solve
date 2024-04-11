import { Editor } from '@monaco-editor/react'
import { DisplaySolution } from '../../../models/solutions'

export default function SolutionDisplay({ data }: DisplaySolution) {
  console.log(data)
  return (
    <div>
      {' '}
      {data ? (
        <div>
          <Editor
            height="50vh"
            width="30rem"
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
        </div>
      ) : (
        <p>No Solutions for this challenge found</p>
      )}
    </div>
  )
}
