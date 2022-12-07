import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection) => {
  const { loading, data, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy: orderBy, orderDirection: orderDirection },
  });
  
  const repositories = loading ? undefined : data.repositories;

  return [repositories, loading, refetch];
};

export default useRepositories;