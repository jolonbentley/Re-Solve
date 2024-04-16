import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getCompletedChallenges } from '../apis/apiClient'
import useUser from '../hooks/useUser'
import { useParams } from 'react-router-dom'
import HeadingBlock from './BuildingBlocks/HeadingBlock'
import GenericContainer from './BuildingBlocks/GenericContainer'

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
    <div className="mx-auto max-w-screen-lg flex-col items-center justify-items-center rounded-3xl bg-primary px-6 py-6 text-primary-content drop-shadow-[2px_4px_4px_rgba(0,0,0,0.25)]">
      <HeadingBlock>
        <h1 style={{ padding: '20px' }}>Completed Challenges</h1>
      </HeadingBlock>
      {Array.isArray(completedChallenges) &&
        completedChallenges.map((challenge) => (
          <div
            className="flex w-full flex-row justify-end gap-1"
            key={challenge.id}
          >
            <div className="flex-1">
              <Link to={'/challenge/' + challenge.id}>
                <div className="my-2 grid grid-cols-4 items-center justify-items-center rounded-2xl bg-secondary p-4 text-center text-secondary-content drop-shadow-md transition-all duration-300 hover:glass hover:bg-accent hover:text-accent-content hover:drop-shadow-xl">
                  <span className="text-lg font-bold">{challenge.title}</span>
                  <span className="text-lg font-bold">
                    {challenge.difficulty}
                  </span>
                  <span>
                    <span className="text-lg font-bold">
                      {challenge.upvotes}
                    </span>{' '}
                    <span className="font-black text-success">↑</span>
                  </span>
                  <span>
                    <span className="text-lg font-bold">
                      {challenge.downvotes}
                    </span>{' '}
                    <span className="font-black text-error">↓</span>
                  </span>
                </div>
              </Link>
            </div>
            <div className="" id="divSoup">
              <Link to={'/solution/' + challenge.id}>
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
