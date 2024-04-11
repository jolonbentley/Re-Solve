import { useState } from 'react'
import { executeCode } from '../../apis/codeClient'

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
        <textarea
          value={output ? output : 'Click "Run Code" to see the output here'}
          readOnly
        ></textarea>
      </div>
    </div>
  )
}
