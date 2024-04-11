import Editor from '@monaco-editor/react'
import { useRef, useState } from 'react'
import SandboxConsole from './SandboxConsole'

interface ChallengeProps {
  code: string
}

export default function SandboxEditor({ code }: ChallengeProps) {
  const editorRef = useRef()
  const [value, setValue] = useState(code)

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
          value={value}
          onChange={(value) => setValue(value)}
          onMount={onMount}
          options={{
            fontSize: 16,
            minimap: {
              enabled: code.length > 200 ? true : false,
            },
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
