import { useQuery } from "@apollo/client";

import { GET_CURRENT_USER } from "../graphql/queries";

const useGetCurrentUser = (variables) => {
  const { data, loading, fetchMore, refetch, ...result } = useQuery(
    GET_CURRENT_USER,
    {
      variables,
      fetchPolicy: "cache-and-network",
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    currentUser: {
      id: data?.me.id,
      username: data?.me.username,
    },
    currentUserReviews: data?.me.reviews,
    fetchMore: handleFetchMore,
    refetch,
    ...result,
  };
};

export default useGetCurrentUser;
