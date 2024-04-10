import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import * as api from '../apis/apiClient'
import { fetchChallenges } from '../apis/apiClient'
import { Challenges } from '../../models/challenges'

// export function AllChallenges() {
//   const challengesFunc = async () => {
//     const challenges = await api.fetchChallenges()
//     console.log(challenges)
//   }
//   challengesFunc()

export function AllChallenges() {
  // Dummy data to use until we fetch real data
  const dummyChallenges: Challenges[] = [
    {
      id: 1,
      title: 'Addition',
      date: '2024-02-27 14:00:00',
      brief: 'A user was asked to write code to add two numbers together.',
      hints: 'none right now.',
      problem:
        'var a = 5\nvar b = 10\n\nfunction addition() {\n  let result = a + b\n  return result\n}',
      author_id: 1,
      upvotes: 3,
      downvotes: 0,
      difficulty: 'Easy',
    },
  ]

  return (
    <div>
      {dummyChallenges.map((challenge) => (
        <div key={challenge.id}>
          <table>
            <td>{challenge.title}</td>
            <td>{challenge.brief}</td>
            <td></td>
          </table>
          <Link to={`/challenges/${challenge.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

//   const {
//     isLoading,
//     isError,
//     data: groupsData,
//   } = useQuery({
//     queryKey: ['challenges'],
//     queryFn: () => getAllChallenges(),
//   })
//   if (isLoading) {
//     return <h1>Loading...AllChallengesPage</h1>
//   }

//   if (isError || !groupsData) {
//     return <h1>Error</h1>
//   }

//   return (
//     <>
//       <h1>All groups</h1>
//       <div className="p-24 flex flex-wrap items-center justify-center">
//         {groupsData.map((challenges) => (
//           <Link key={challenges.id} to={`/groups/${challenges.id}`}>
//             <div
//               key={challenges.id}
//               className="flex-shrink-0 m-6 relative overflow-hidden mt-auto bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-1000 rounded-lg max-w-xs shadow-lg"
//             >
//               <svg
//                 className="absolute bottom-0 left-0 mb-8 "
//                 viewBox="0 0 375 283"
//                 fill="none"
//               >
//                 <rect
//                   x="159.52"
//                   y="175"
//                   width="152"
//                   height="152"
//                   rx="8"
//                   transform="rotate(-45 159.52 175)"
//                   fill="white"
//                 />
//                 <rect
//                   y="107.48"
//                   width="152"
//                   height="152"
//                   rx="8"
//                   transform="rotate(-45 0 107.48)"
//                   fill="white"
//                 />
//               </svg>
//               <div className="relative pt-10 px-10 flex items-center justify-center">
//                 <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
//                 <img
//                   className="relative w-40"
//                   src={`/images/icons/${challenges.image}`}
//                   alt={challenges.name}
//                 />
//               </div>
//               <div className="relative text-black px-6 pb-6 mt-6">
//                 <div className="flex justify-between">
//                   <span className="block font-semibold text-xl">
//                     {challenges.name}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   )

export default AllChallenges
