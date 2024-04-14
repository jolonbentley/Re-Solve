import HeadingBlock from "../BuildingBlocks/HeadingBlock"
import ChallengeCard from "../BuildingBlocks/ChallengeCard"
import { useQuery } from "@tanstack/react-query"
import { getIncompleteChallenges } from "../../apis/apiClient"

export default function AvailableChallenges() {
  const id = 3
  const {
    isLoading,
    isError,
    data: challengesData,
  } = useQuery({
    queryKey: ['icompleteChallenges'],
    queryFn: () => getIncompleteChallenges(id),
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
        Available Challenges
      </HeadingBlock>
      {challengesData?.map((challenge, index) => ( <ChallengeCard key={index} { ...challenge }/>))}
    </div>
  )
}
