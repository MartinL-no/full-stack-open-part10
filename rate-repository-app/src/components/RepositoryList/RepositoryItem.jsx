import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { RepositoryItemStat } from './RespositoryItemStat';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.colors.secondary,
    padding: 12,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 110,
  },
  headingsContainer: {
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 3,
    marginBottom: 10,

  },
  statsContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  language: {
    marginRight: 'auto',
    padding: 6,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: theme.colors.accent,
    borderRadius: 3,
    overflow: 'hidden',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.headingsContainer}>
          <Text marginBottom='wide' fontSize='subheading' fontWeight='bold'>{item.fullName}</Text>
          <Text marginBottom='wide' color='textSecondary'>{item.description}</Text>
          <Text marginBottom='wide' color='textAccent' fontWeight='semiBold' style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <RepositoryItemStat name='Stars' stat={item.stargazersCount} />
        <RepositoryItemStat name='Forks' stat={item.forksCount} />
        <RepositoryItemStat name='Reviews' stat={item.reviewCount} />
        <RepositoryItemStat name='Rating' stat={item.ratingAverage} />
      </View>
    </View>
  );
};

export { RepositoryItem };