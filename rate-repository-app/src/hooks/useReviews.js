import { useQuery } from "@apollo/client";

import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    reviews: data?.repository.reviews,
    fetchMore: handleFetchMore,
    loadingReviews: loading,
    ...result,
  };
};

export default useReviews;
