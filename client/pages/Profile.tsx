import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser'
import { UserProfile } from '../components/UserProfile'
import { MyProfile } from '../components/MyProfile'
import GenericContainer from '../components/BuildingBlocks/GenericContainer'

export default function Profile() {
  // Check is this is the logged in users, page
  const id = Number(useParams().id)
  const user = useUser().data

  // check id's against each other.

  // if it is, render their page with edit options,
  // use state to manage edit?
  // use different components - gives opportunity for a different layout/view

  // if it is not, render the page with only displayed properties.
  // how are we going to get information like a profile pic
  // what other options are useful?

  if (!user) {
    return <div>Loading User...</div>
  }

  return <div>{id === user.id ? <MyProfile /> : <UserProfile />}</div>
}
