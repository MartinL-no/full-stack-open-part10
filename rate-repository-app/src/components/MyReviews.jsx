import useGetCurrentUser from "../hooks/useGetCurrentUser";
import { FlatList } from "react-native";
import { ReviewItem } from "./SingleRepository/ReviewItem";
import { ItemSeparator } from "./RepositoryList/RepositoryListContainer";

const MyReviews = () => {
  const { currentUserReviews, fetchMore } = useGetCurrentUser({ first: 4, includeReviews: true });
  
  const reviewNodes = currentUserReviews
    ? currentUserReviews.edges.map(edge => edge.node)
    : [];

    const onEndReach = () => {
      fetchMore();
    };

  return (
    <FlatList
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
  )
}

export default MyReviews;