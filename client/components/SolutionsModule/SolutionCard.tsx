interface Props {
  title: string
  upvotes: number
  downvotes: number
  date: string
  id: number
  author_id: number
  is_published: boolean
  author: string
}

export default function SolutionCard(props: Props) {
  const { author, downvotes, upvotes, author_id, date, is_published } = props
  // const jsDate = new Date(date)

  return (
    <div className="my-2 mr-2 grid grid-cols-4 items-center justify-items-center rounded-2xl bg-secondary p-4 text-center text-secondary-content drop-shadow-md transition-all duration-300 hover:bg-accent hover:text-accent-content hover:drop-shadow-xl">
      <span className="text-lg font-bold">{author}</span>
      <span>
        <span className="text-lg font-bold">{upvotes}</span>{' '}
        <span className="font-black text-success">↑</span>
      </span>
      <span>
        <span className="text-lg font-bold">{downvotes}</span>{' '}
        <span className="font-black text-error">↓</span>
      </span>
      <span className="text-lg font-bold">{date}</span>
    </div>
  )
}
