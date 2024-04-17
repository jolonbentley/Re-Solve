import { Editor } from '@monaco-editor/react'
import { DisplaySolution } from '../../../models/solutions'
import SolutionUpvote from '../SolutionUpvote'
import SolutionDownvote from '../SolutionDownvote'

export default function SolutionDisplay({ data }: DisplaySolution) {
  return (
    <div className="mt-2">
      {data ? (
        <div>
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
          <div className="flex justify-end py-2">
            <SolutionUpvote data={data} />
            <SolutionDownvote data={data} />
          </div>
        </div>
      ) : (
        <p>No Solutions for this challenge found</p>
      )}
    </div>
  )
}
