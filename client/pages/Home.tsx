import AllChallenges from '../components/AvailableChallenges'
import SolutionDisBox from '../components/SolutionDiscussionBox'
import { CompletedChallenges } from '../components/CompletedChallenges'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Re:Solve</h1>
      <h2>Sign up today to get started with challenges</h2>
      <AllChallenges />
      <SolutionDisBox />
      <CompletedChallenges />
    </div>
  )
}
