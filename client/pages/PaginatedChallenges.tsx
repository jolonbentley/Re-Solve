import GenericContainer from '../components/BuildingBlocks/GenericContainer'
import HeadingBlock from '../components/BuildingBlocks/HeadingBlock'
import { useParams } from 'react-router-dom'
import PageOfChallenges from '../components/PaginatedChallenges/PageOfChallenges'
import PageSwitcher from '../components/PaginatedChallenges/PageSwitcher'

export default function PaginatedChallenges() {
  const pagingData = { pageNo: Number(useParams().pageNo), pageSize: 5 }

  return (
    <GenericContainer>
      <HeadingBlock>Challenges Directory</HeadingBlock>
      <div className="ml-8">
        <span className="text-lg font-bold">Page {pagingData.pageNo}.</span>
      </div>
      <PageOfChallenges {...pagingData} />
      <PageSwitcher />
    </GenericContainer>
  )
}
