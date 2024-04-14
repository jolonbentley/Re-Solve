interface Props {
  children: React.ReactNode
}


export default function HeadingBlock(props: Props) {
  const { children } = props
  return (
    <div className="p-0  bg-primary text-primary-content rounded-2xl flex justify-center">
      <span className="text-2xl font-bold">{children}</span>
    </div>
  )
}