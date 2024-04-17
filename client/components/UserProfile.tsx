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
            <p>
              <strong>Experience: </strong>
              {user?.experience}
            </p>
            <p>
              <strong>Coolness: </strong>
              {user?.coolness}
            </p>
            <p>
              <strong>Spaghetness: </strong>
              {user?.spaghetness}
            </p>
            <p>
              <strong>Favourite Duck: </strong>
              {user?.favourite_duck}
            </p>
            <p>
              <strong>About: </strong>
              {user?.about}
            </p>
          </div>
        </div>
      </div>
      <CompletedChallengesByUserId />
    </div>
  )
}
