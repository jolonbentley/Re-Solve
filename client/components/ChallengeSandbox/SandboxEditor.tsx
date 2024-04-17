import Editor from '@monaco-editor/react'
import { useRef, useState } from 'react'
import SandboxConsole from './SandboxConsole'
import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { useQueryClient } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { getSolutionByChallengeIdAndAuthorId } from '../../apis/apiClient'
import { useEffect } from 'react'

export default function SandboxEditor() {
  const editorRef = useRef()
  const [editorCode, setEditorCode] = useState("")
    // const [code, setCode] = useState(props.code)
  const challengeId = String(useParams().id)
  const user = useUser()
  const queryClient = useQueryClient()

  const solution = useQuery({
    queryKey: ["getsolutionx1"],
    queryFn: () => getSolutionByChallengeIdAndAuthorId(challengeId, user.data?.id),
    enabled: !!user.data?.id,
  })
  
  useEffect(() => {
    queryClient.invalidateQueries({queryKey: ["getsolutionx1"]})
  }, [solution.data?.body, challengeId, queryClient])
  

  if (solution.isPending) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (solution.isError) {
    return (
      <div>
        Error {String(solution.error)}
      </div>
    )
  }
  
  const onMount = (editor) => {
    editorRef.current = editor
    editor.focus()
  }

  return (
    <div>
      <div>
        <Editor
          height="50vh"
          width="30rem"
          theme="vs-dark"
          defaultLanguage="typescript"
          value={solution.data.body}
          onChange={(value) => setEditorCode(value)}
          onMount={onMount}
          options={{
            fontSize: 16,
            contextmenu: true,
          }}
        />
      </div>
      <div>
        <SandboxConsole editorRef={editorRef} />
      </div>
    </div>
  )
}
