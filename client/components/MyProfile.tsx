import { useState } from 'react'
import useUser from '../hooks/useUser'
import { Link } from 'react-router-dom'
import CompletedChallengesByUserId from './CompletedChallengesByuserId'
import HeadingBlock from './BuildingBlocks/HeadingBlock'

export function MyProfile() {
  const user = useUser().data
  const id = Number(user?.id)

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
      <div>
        <Link to="/profile/edit">
          <button className="btn bg-accent text-accent-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-gray-400">
            Edit Profile
          </button>
        </Link>
      </div>
      <div>
        <HeadingBlock>
          <CompletedChallengesByUserId />
        </HeadingBlock>
      </div>
    </div>
  )
}
