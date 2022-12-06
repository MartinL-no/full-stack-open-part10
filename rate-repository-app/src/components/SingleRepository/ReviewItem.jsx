import { View, StyleSheet } from "react-native";
import format from 'date-fns/format'


import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.colors.secondary,
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  ratingContainer: {
    height: 40,
    width: 40,
    marginRight: 12,
    border: 'solid',
    borderWidth: 2,
    borderColor: theme.colors.accent,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    color: theme.colors.accent,
  },
  detailsContainer: {
    marginTop: 3,
    width: '85%',
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


const ReviewItem = ({ review }) => {
  const formattedDate = format(new Date(review.createdAt), 'MM.dd.yyyy')

  return (
    <View style={styles.itemContainer}>
      <View style={styles.ratingContainer}>
        <Text fontSize="subheading" fontWeight="bold" style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text fontSize="subheading" fontWeight="bold" marginBottom="wide">{review.user.username}</Text>
        <Text color="textSecondary" marginBottom="wide">{formattedDate}</Text>
          <Text>{review.text}</Text>
      </View>
    </View>
  )
  // Single review item
};

export { ReviewItem }