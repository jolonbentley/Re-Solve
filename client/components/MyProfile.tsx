import useUser from '../hooks/useUser'
import { Link } from 'react-router-dom'
import CompletedChallengesByUserId from './CompletedChallengesByuserId'

export function MyProfile() {
  const user = useUser().data
  const id = Number(user?.id)

  return (
    <div className="profile-container">
      <div className="main-profile-header">
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
        <div className="btn-profile-div">
          <Link to="/profile/edit">
            <button className="btn bg-accent text-accent-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-gray-400">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      <div>
        <CompletedChallengesByUserId />
      </div>
    </div>
  )
}
