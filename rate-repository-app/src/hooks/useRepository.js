import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  return {
    repository: data?.repository,
    loading,
  };
};

export default useRepository;
