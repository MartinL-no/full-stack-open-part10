import { Searchbar } from 'react-native-paper';

const SearchBar = ({ searchInput, setSearchInput }) => {

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchInput}
      value={searchInput}
    />
  );
};

export default SearchBar;