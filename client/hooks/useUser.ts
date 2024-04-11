import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { MutationFunction } from "@tanstack/react-query";
import { getUser } from "../apis/userAPI";
import { registerNewUser } from "../apis/userAPI";


export default function useUser() {
  const { user, getAccessTokenSilently } = useAuth0();

  const query = useQuery(
    {
      queryKey: [user], 
      queryFn: async () => {
        const token = await getAccessTokenSilently()
        return getUser({ token })
      },
      // Do not run the query function without finding a user from useAuth0
      enabled: Boolean(user)
    });
  return { ...query, add: useAddUser() } 
}

const useAddUserMutation = <TData = unknown, TVariables = unknown>(mutationFn: MutationFunction<TData, TVariables>) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["placeholder"] })
    }
  })
  return mutation
}

const useAddUser = () => {
  return useAddUserMutation(registerNewUser)
}





