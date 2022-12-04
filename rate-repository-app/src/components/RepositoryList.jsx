import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data } = useQuery(GET_REPOSITORIES);
  console.log(data);

  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem item={item} key={item.id} />
      )}
      // other props
    />
  );
};

export default RepositoryList;