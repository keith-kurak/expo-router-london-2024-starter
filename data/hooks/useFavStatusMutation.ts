import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useFavStatusMutation = function () {
  const queryClient = useQueryClient();
  const { authToken } = useAuth();

  // Queries
  const query = useMutation({
    mutationFn: async (favStatus: { workId: string; status: boolean }) => {
      const { workId, status } = favStatus;
      const response = await fetch(`/api/works/${workId}/fav`, {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          authToken,
        },
        cache: "default",
        body: JSON.stringify({ status }),
      });
      return await response.json();
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        [`works:fav:${variables.workId}`],
        variables.status
      );
      queryClient.invalidateQueries({ queryKey: ["favs"] });
    },
  });

  return query;
};
