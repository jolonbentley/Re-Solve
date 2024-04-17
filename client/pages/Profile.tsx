import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import { UserProfile } from '../components/UserProfile'
import { MyProfile } from '../components/MyProfile'

export default function Profile() {
  const id = Number(useParams().id)
  const user = useUser().data

  if (!user) {
    return (
      <span className="loading loading-xs mx-auto mt-4 animate-spin"></span>
    )
  }

  return <div>{id === user.id ? <MyProfile /> : <UserProfile />}</div>
}
