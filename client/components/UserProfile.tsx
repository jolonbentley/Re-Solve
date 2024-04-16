import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserById } from '../apis/userAPI'
import { CompletedChallengesByUserId } from './CompletedChallengesByuserId'
import HeadingBlock from './BuildingBlocks/HeadingBlock'

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

  // NEED TO ADD THEIR SOLUTIONS TABLE TO THEIR PROFILE

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user?.profile_pic_url} alt="user portrait" />
        </div>
        <div className="profile-info">
          <h2 className="p-name">{user?.name}</h2>
          <div className="profile-details">
            <p>Experience: {user?.experience}</p>
            <p>Coolness: {user?.coolness}</p>
            <p>Spaghetness: {user?.spaghetness}</p>
            <p>Favourite Duck: {user?.favourite_duck}</p>
            <p>About: {user?.about}</p>
          </div>
        </div>
      </div>
      <CompletedChallengesByUserId />
    </div>
  )
}
