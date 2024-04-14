import GenericContainer from "../components/BuildingBlocks/GenericContainer"
import AvailableChallenges from "../components/ChallengesMenu/AvailableChallenges"
import CompletedChallenges from "../components/ChallengesMenu/CompletedChallenges"

export default function Challenges() {

  return (
    <div>
      <GenericContainer>
        <AvailableChallenges />
        <CompletedChallenges />
      </GenericContainer>
    </div>
  )
}