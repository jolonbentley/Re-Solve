import request from 'superagent'

const rootUrl = 'https://emkc.org/api/v2/piston'

export async function executeCode(code) {
  const body = {
    language: 'typescript',
    version: '1.32.3',
    files: [{ content: code }],
  }
  const res = await request.post(`${rootUrl}/execute`).send(body)
  return res.body
}
