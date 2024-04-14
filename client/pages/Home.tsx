import AllChallenges from '../components/AvailableChallenges'
import SolutionDisBox from '../components/SolutionDiscussionBox'
import CompletedChallenges from '../components/ChallengesMenu/CompletedChallenges'
import Challenges from './Challenge'
import GenericContainer from '../components/BuildingBlocks/GenericContainer'
import AvailableChallenges from '../components/ChallengesMenu/AvailableChallenges'

export default function Home() {
  return (
    <div>
      <GenericContainer>
        <AvailableChallenges />
        <CompletedChallenges />
      </GenericContainer>
    </div>
  )
}
