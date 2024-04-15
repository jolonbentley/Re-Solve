import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserById } from '../apis/userAPI'

export function UserProfile() {
  // const user = useUser().data
  const id = Number(useParams().id)

  const {
    isLoading,
    isError,
    error,
    data: user,
  } = useQuery({
    queryFn: () => getUserById(id),
    queryKey: ['user', id],
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>There was an error, {String(error)}</div>
  }

  console.log(user)

  return (
    <div>
      <div>
        <h2>Profile</h2>
      </div>
      <div>
        <img src={user?.profile_pic_url} alt="user portrait" />
      </div>
      <div>
        <ul key={id}>
          <li>Name: {user?.name}</li>
          <li>Experience: {user?.experience}</li>
          <li>Coolness: {user?.coolness}</li>
          <li>Spaghetness: {user?.spaghetness}</li>
          <li>Favourite Duck: {user?.favourite_duck}</li>
        </ul>
      </div>
    </div>
  )
}
