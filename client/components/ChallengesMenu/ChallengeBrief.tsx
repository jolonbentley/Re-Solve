import { ChallengeData } from "../../../models/challenges"


export default function ChallengeBrief({ data }: ChallengeData) {

  return (
    <div style={{ border: 'solid' }} className="mx-auto flex-col justify-center my-2 w-3/5 text-center bg-accent text-accent-content">
      <span>Challenge: </span><span className="italic">{data.brief}</span>
      <div >
        <p>Hint: <span className="italic">{data.hints}</span></p>
      </div>
    </div>
  )
}



