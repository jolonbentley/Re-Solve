import CompletedChallenges from '../components/ChallengesMenu/CompletedChallenges'
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
