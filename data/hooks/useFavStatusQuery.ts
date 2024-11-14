import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useFavStatusQuery = function (workId: string) {
  const { authToken } = useAuth();
  // Queries
  const query = useQuery({
    queryKey: [`works:fav:${workId}`],
    queryFn: async () => {
      const response = await fetch(`/api/works/${workId}/fav`, {
        method: "GET",
        headers: {
          authToken,
        },
      });
      return await response.json();
    },
  });

  return query;
};
