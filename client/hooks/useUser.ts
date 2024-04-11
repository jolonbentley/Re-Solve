import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { MutateFunction } from "@tanstack/react-query";

export const useUser = () => {
  const { user, getAccessTokenSilently } = useAuth0;
  const query = useQuery({queryKey: ['user'], queryFn: async () => {
    const token = await getAccessTokenSilently()
    return 
  }})
}
