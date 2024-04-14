interface Props {
  children: React.ReactNode
}


export default function HeadingBlockSecondary(props: Props) {
  const { children } = props
  return (
    <div className="p-4 bg-secondary text-secondary-content rounded-2xl flex justify-center">
      <span className="text-2xl font-bold">{children}</span>
    </div>
  )
}