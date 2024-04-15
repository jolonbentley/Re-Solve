interface Props {
  title: string
  upvotes: number
  downvotes: number
  date: string
  id: number
  author_id: number
  is_published: boolean
}


export default function SolutionCard(props: Props) {
  const { title, downvotes, upvotes, author_id, date, is_published } = props
  // const jsDate = new Date(date)

  return (
    <div className="p-4 mr-2 text-center justify-items-center items-center bg-secondary text-secondary-content rounded-2xl my-2 grid grid-cols-4 drop-shadow-md hover:drop-shadow-xl hover:bg-accent hover:text-accent-content transition-all duration-300">
      <span className="text-lg font-bold">{title}</span>
      <span><span className="text-lg font-bold">{upvotes}</span> <span className="font-black text-success">↑</span></span>
      <span><span className="text-lg font-bold">{downvotes}</span> <span className="font-black text-error">↓</span></span>
      <span className="text-lg font-bold">{date }</span>
    </div>
  )
}