import { useQuery } from '@tanstack/react-query'
import { getChallenge } from '../apis/apiClient'

export async function useSpecificChallenge(id: number) {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['challenge'],
    queryFn: await getChallenge(id),
  })
  if (isLoading) {
    return
  }
  if (isError) {
    return error
  }
  return data
}
