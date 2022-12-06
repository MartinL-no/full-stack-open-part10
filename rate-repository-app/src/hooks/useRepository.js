import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
  })
  const repository = loading ? undefined : data.repository;

  return [repository, loading];
};

export default useRepository;