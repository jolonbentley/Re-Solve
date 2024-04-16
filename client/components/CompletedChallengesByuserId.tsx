import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getCompletedChallenges } from '../apis/apiClient'
import useUser from '../hooks/useUser'
import { useParams } from 'react-router-dom'
import HeadingBlock from './BuildingBlocks/HeadingBlock'

export function CompletedChallengesByUserId() {
  const userId = useParams().id

  const {
    isLoading,
    isError,
    data: completedChallenges,
  } = useQuery({
    queryKey: ['completedChallenges', userId], // Include userId in the queryKey
    queryFn: () => getCompletedChallenges(userId), // Call the modified API function
  })

  if (isLoading) {
    return <h1>Loading...ChallengesDataPage</h1>
  }

  if (isError || !completedChallenges) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <div>
        <HeadingBlock>
          <h1 style={{ padding: '20px' }}>Completed Challenges</h1>
        </HeadingBlock>
      </div>

      {completedChallenges.map((challenge) => (
        <div
          key={challenge.id}
          className="my-2 mr-2 grid grid-cols-5 items-center justify-items-center rounded-2xl bg-secondary p-4 text-center text-secondary-content drop-shadow-md transition-all duration-300 hover:bg-accent hover:text-accent-content hover:drop-shadow-xl"
        >
          <span className="text-lg font-bold">
            <Link to={`/challenge/${challenge.id}`}>{challenge.title}</Link>
          </span>
          <span className="text-lg font-bold">{challenge.difficulty}</span>
          <span className="text-lg font-bold">{challenge.upvotes}</span>
          <span className="text-lg font-bold">{challenge.downvotes}</span>
          <div className="" id="divSoup">
            <Link to={`/solution/${challenge.id}`}>
              <div className=" my-2 items-center justify-items-center rounded-2xl bg-secondary p-4 text-center text-secondary-content drop-shadow-md transition-all duration-300 hover:bg-accent hover:text-accent-content hover:drop-shadow-xl">
                <span className="text-lg font-bold">Solutions</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
export default CompletedChallengesByUserId
