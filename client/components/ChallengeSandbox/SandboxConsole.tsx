import { useState } from 'react'
import { executeCode } from '../../apis/codeClient'
import { Editor } from '@monaco-editor/react'
import useUser from '../../hooks/useUser'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { submitSolution } from '../../apis/apiClient'
import { useParams } from 'react-router-dom'

export default function SandboxConsole({ editorRef }) {
  const [output, setOutput] = useState(null)
  const id = useParams().id
  const user = useUser().data

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue()
    if (!sourceCode) return
    try {
      setOutput('Running Code...')
      const { run } = await executeCode(sourceCode)
      setOutput(run.output)
    } catch (error) {
      console.log('There was an error', error)
    }
  }

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data) => submitSolution(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['solutions'] })
      console.log('challenge submitted')
      window.location.href = `/solution/${id}`
    },
    onError: (error) => {
      console.log('Submission Failed', error)
    },
  })

  const submitCode = async () => {
    const sourceCode = editorRef.current.getValue()
    if (!sourceCode) return
    const data = {
      challenge_id: id,
      body: sourceCode,
      author_id: user?.id,
    }
    console.log(data)
    mutation.mutate(data)
  }

  return (
    <div>
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
      <button className="btn" onClick={runCode}>
        Run Code
      </button>
      <button className="btn" onClick={submitCode}>
        Submit Code
      </button>
    </div>
  )
}
