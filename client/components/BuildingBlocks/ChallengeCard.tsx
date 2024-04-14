import { Link } from "react-router-dom"
interface Props {
  title: string
  id: number
  difficulty: string
  upvotes: number
  downvotes: number
  linkToSolution?: boolean
}


export default function ChallengeCard(props: Props) {
  const { title, difficulty, downvotes, upvotes, id } = props

  let link = ""
  if (props.linkToSolution) {
    link = "/solution/"
  } else {
    link = "/challenge/"
  }

  return (
    <Link to={link + id}>
      <div className="p-4 text-center justify-items-center items-center bg-secondary text-accent-content rounded-2xl my-2 grid grid-cols-4 drop-shadow-md hover:drop-shadow-xl">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-lg font-bold">{difficulty }</span>
        <span className="text-lg font-bold">{upvotes} ↑</span>
        <span className="text-lg font-bold">{downvotes} ↓</span>
      </div>
    </Link>
  )
}