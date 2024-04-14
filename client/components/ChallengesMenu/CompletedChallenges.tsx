import HeadingBlock from "../BuildingBlocks/HeadingBlock"
import ChallengeCard from "../BuildingBlocks/ChallengeCard"
import { useQuery } from "@tanstack/react-query"
import { getIncompleteChallenges } from "../../apis/apiClient"
import { getCompletedChallenges } from "../../apis/apiClient"
import useUser from "../../hooks/useUser"

export default function AvailableChallenges() {
  const user = useUser().data
  const id = user?.id

  // PROBLEM - This query function is dependent on "id"
  // Can try adding completed challenges to the useUser return?

  const {
    isLoading,
    isError,
    data: challengesData,
  } = useQuery({
    queryKey: ['completedChallenges'],
    queryFn: () => getCompletedChallenges(id),
  })
  if (isLoading) {
    return <h1>Loading...ChallengesDataPage</h1>
  }

  if (isError || !challengesData) {
    return <h1>Error</h1>
  }
  return (
    <div>
      <HeadingBlock>
        Completed Challenges
      </HeadingBlock>
      {challengesData?.map((challenge, index) => ( <ChallengeCard key={index} linkToSolution={true} { ...challenge }/>))}
    </div>
  )
}
