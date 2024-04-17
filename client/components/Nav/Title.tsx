import { Link } from 'react-router-dom'

export default function Title() {
  return (
    <Link to="/" className="flex items-center">
      {' '}
      <span className="ml-auto mr-auto content-center text-6xl font-bold tracking-tight">
        Re-Solve
      </span>{' '}
    </Link>
  )
}
