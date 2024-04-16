import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function PageSwitcher() {
  const queryClient = useQueryClient();
  const pageNo = Number(useParams().pageNo)

  useEffect(() => {
    queryClient.invalidateQueries({queryKey: ['getPage']})
  }, [pageNo, queryClient])

  const nextPage = "/challenges/" + (Number(pageNo) + 1)
  let prevPage =""
  if (pageNo <= 1) {
    prevPage = "/challenges/" + (1)
  } else {
    prevPage = "/challenges/" + (Number(pageNo) - 1)
  }

  return (
    <div className="flex justify-around mt-4">
      <Link to={prevPage}>
        <div className=" p-4 text-center justify-items-center items-center bg-secondary text-secondary-content rounded-2xl my-2 drop-shadow-md hover:drop-shadow-xl hover:bg-accent hover:text-accent-content transition-all duration-300">
          <span className="text-lg font-bold">Prev Page</span>
        </div>
      </Link>
      <Link to={nextPage}>
        <div className=" p-4 text-center justify-items-center items-center bg-secondary text-secondary-content rounded-2xl my-2 drop-shadow-md hover:drop-shadow-xl hover:bg-accent hover:text-accent-content transition-all duration-300">
          <span className="text-lg font-bold">Next Page</span>
        </div>
      </Link>
    </div>
  )
  
}