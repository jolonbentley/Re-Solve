import UserSignIn from "../SignIn/UserSignIn"
import ThemeToggle from "./ThemeToggle"
import { Link } from "react-router-dom"
import { IfAuthenticated } from "../Authenticated"

export default function UserArea() {
  return (
    <div className="flex flex-row justify-end items-center gap-2 ">
      <ThemeToggle />
      <IfAuthenticated>
        <Link to="/submit">
          <button className="btn w-28 ">Submit</button>
        </Link>
      </IfAuthenticated>
      <Link to="/challenges/1">
        <button className="btn w-28">Challenges</button>
      </Link>
      <UserSignIn />
    </div>
  )
}