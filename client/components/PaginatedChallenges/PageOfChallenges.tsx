import { useQuery } from "@tanstack/react-query";
import { getPageOfChallenges } from "../../apis/apiClient";
import ChallengeCardDetailed from "../BuildingBlocks/ChallengeCardDetailed";

interface Props {
  pageNo: number
  pageSize: number
}

export default function PageOfChallenges( props: Props ) {
  const { pageNo, pageSize } = props

  const { isPending, isError, error, data } = useQuery({queryKey: ['getPage'], queryFn: () => getPageOfChallenges(pageNo, pageSize)})
  
  if (isError) {
    return <span>Error! ${String(error)}</span>
  }

  if (isPending) {
    return <span>Loading...</span>
  }

  if (data.length == 0) {
    return <span>No challenges to display for page {pageNo}</span>
  }
  return (
    <div>
      {data.map((challenge, index) => {
        return (
          <ChallengeCardDetailed key={index} {...challenge} />
        )
      })}
    </div>
  )
}