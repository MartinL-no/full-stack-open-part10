import { Text, View } from 'react-native';

const RepositoryItem = ({ item }) => {
  return (
    <View style>
      <Text>Full name: {item.id}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stars}</Text>
      <Text>Forks: {item.forks}</Text>
      <Text>Reviews: {item.reviews}</Text>
      <Text>Rating: {item.rating}</Text>
    </View>
  );
};

export default RepositoryItem;