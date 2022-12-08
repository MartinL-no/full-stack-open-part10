import { useMutation } from "@apollo/client";

import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_CURRENT_USER } from "../graphql/queries";

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  const deleteReview = async (deleteReviewId) => {
    const { data } = await mutate({ variables: { deleteReviewId } });

    return data;
  };

  return { deleteReview };
};

export default useDeleteReview;
