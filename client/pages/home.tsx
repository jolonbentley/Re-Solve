import AllChallenges from '../components/AvailableChallenges'
import UserSignIn from '../components/SignIn/UserSignIn'
import SolutionDisBox from '../components/SolutionDiscussionBox'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Re:Solve</h1>
      <h2>Sign up today to get started with challenges</h2>
      <UserSignIn />
      <AllChallenges />
      <SolutionDisBox />
    </div>
  )
}
