import UserSignIn from "../SignIn/UserSignIn"
import ThemeToggle from "./ThemeToggle"
import { Link } from "react-router-dom"

export default function UserArea() {
  return (
    <div className="flex flex-row justify-end items-center gap-4 ">
      <ThemeToggle />
      <Link to="/challenges/1">
        <button className="btn">Challenges</button>
      </Link>
      <UserSignIn />
    </div>
  )
}