import { useState } from 'react'
import { executeCode } from '../../apis/codeClient'
import { Editor } from '@monaco-editor/react'

export default function SandboxConsole({ editorRef }) {
  const [output, setOutput] = useState(null)
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue()
    if (!sourceCode) return
    try {
      const { run } = await executeCode(sourceCode)
      setOutput(run.output)
    } catch (error) {
      console.log('There was an error', error)
    }
  }

  const submitCode = async () => {
    const sourceCode = editorRef.current.getValue()
    if (!sourceCode) return
    // useMutation to be written for posting solution to db,
    // awaiting user implementation
  }

  return (
    <div>
      <h2> Output </h2>
      <button className="btn" onClick={runCode}>
        Run Code
      </button>
      <button className="btn" onClick={submitCode}>
        Submit Code
      </button>
      <div>
        <Editor
          height="20vh"
          width="30rem"
          theme="vs-dark"
          defaultLanguage="Markdown"
          value={
            output ? `${output}` : `'Click "Run Code" to see the output here'`
          }
          options={{
            fontSize: 16,
            contextmenu: true,
            readOnly: true,
            domReadOnly: true,
          }}
        />
      </div>
    </div>
  )
}
