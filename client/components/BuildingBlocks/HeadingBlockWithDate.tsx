interface Props {
  children: React.ReactNode
  date: Date
}


export default function HeadingBlockWithDate(props: Props) {
  const { children, date } = props
  const jsDate = new Date(date)
  const formattedDate = `${jsDate.getDate()}/${jsDate.getMonth()}/${jsDate.getFullYear()}`
  return (
    <div className="mb-2  bg-primary text-primary-content rounded-2xl flex flex-col items-center justify-center">
      <span className="text-2xl font-bold">{children}</span>
      <p className="italic text-sm">{formattedDate}</p>
    </div>
  )
}