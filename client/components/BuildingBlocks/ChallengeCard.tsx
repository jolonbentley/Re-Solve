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
    <div className="flex flex-row w-full justify-end gap-1">
      <div className="flex-1">
        <Link to={'/challenge/' + id}>
          <div className="p-4 text-center justify-items-center items-center bg-secondary text-secondary-content rounded-2xl my-2 grid grid-cols-4 drop-shadow-md hover:drop-shadow-xl hover:glass hover:bg-accent hover:text-accent-content transition-all duration-300">
            <span className="text-lg font-bold">{title}</span>
            <span className="text-lg font-bold">{difficulty }</span>
            <span><span className="text-lg font-bold">{upvotes}</span> <span className="font-black text-success">↑</span></span>
            <span><span className="text-lg font-bold">{downvotes}</span> <span className="font-black text-error">↓</span></span>
          </div>
        </Link>
      </div>
      <div className="" id="divSoup">
        <Link to={'/solution/' + id}>
          <div className=" p-4 text-center justify-items-center items-center bg-secondary text-secondary-content rounded-2xl my-2 drop-shadow-md hover:drop-shadow-xl hover:bg-accent hover:text-accent-content transition-all duration-300">
            <span className="text-lg font-bold">Solutions</span>
          </div>
        </Link>
      </div>
    </div>
  )
}