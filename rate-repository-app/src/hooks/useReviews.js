import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
  const { data, loading } = useQuery(GET_REVIEWS, {
    variables: { id },
  })
  const reviews = loading ? undefined : data.repository.reviews;

  return [reviews, loading];
};

export default useReviews;