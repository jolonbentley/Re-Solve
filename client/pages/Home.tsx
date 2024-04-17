import CompletedChallenges from '../components/ChallengesMenu/CompletedChallenges'
import GenericContainer from '../components/BuildingBlocks/GenericContainer'
import AvailableChallenges from '../components/ChallengesMenu/AvailableChallenges'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'
import LandingPage from '../components/LandingPage'

export default function Home() {
  return (
    <div>
      <IfNotAuthenticated>
        <LandingPage />
      </IfNotAuthenticated>
      <IfAuthenticated>
        <GenericContainer>
          <AvailableChallenges />
          <CompletedChallenges />
        </GenericContainer>
      </IfAuthenticated>
    </div>
  )
}
