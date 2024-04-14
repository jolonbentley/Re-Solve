interface Props {
  children: React.ReactNode
}


export default function GenericContainer(props: Props) {
  const { children } = props
  return (
    <div className="bg-primary text-primary-content max-w-screen-lg flex-col my-4 items-center justify-items-center mx-auto px-6 py-6 rounded-3xl drop-shadow-[2px_4px_4px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  )
}