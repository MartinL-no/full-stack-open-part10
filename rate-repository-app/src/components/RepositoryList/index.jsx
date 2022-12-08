import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import useRepositories from '../../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchInput, setSearchInput] = useState('');
  const [searchKeyword] = useDebounce(searchInput, 500)
  const [buttonLabel, setButtonLabel] = useState('Latest repositories');
  const [repositories] = useRepositories(orderBy, orderDirection, searchKeyword);

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      buttonLabel={buttonLabel}
      setButtonLabel={setButtonLabel}
      searchInput={searchInput}
      setSearchInput={setSearchInput}
    />
  )
};

export default RepositoryList;