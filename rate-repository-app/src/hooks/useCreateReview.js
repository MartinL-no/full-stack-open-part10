import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    const reviewObject = {
      ...review,
      rating: Number(review.rating),
    };
    const { data } = await mutate({ variables: { review: reviewObject } });

    return data.createReview.repositoryId;
  };

  return [createReview, result];
};

export default useCreateReview;
