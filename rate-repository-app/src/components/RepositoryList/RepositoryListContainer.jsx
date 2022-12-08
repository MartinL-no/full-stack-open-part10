import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import { RepositoryListPicker } from './RepositoryListPicker';
import RepositoryItem from '../RepositoryItem';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({
  repositories,
  orderBy,
  setOrderBy,
  setOrderDirection,
  searchInput,
  setSearchInput,
  buttonLabel,
  setButtonLabel,
  onEndReach,
}) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem item={item} key={item.id} />
        </Pressable>
      )}
      ListHeaderComponent={() => (
        <>
          <RepositoryListPicker
            buttonLabel={buttonLabel}
            setButtonLabel={setButtonLabel}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            setOrderDirection={setOrderDirection}
          />
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </>
      )}
    />
  );
};

export { RepositoryListContainer, ItemSeparator };