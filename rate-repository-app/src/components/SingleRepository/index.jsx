import { FlatList } from "react-native";
import { useParams } from "react-router-native";

import useRepository from "../../hooks/useRepository";
import useReviews from "../../hooks/useReviews";
import RespositoryItem from "../RepositoryItem";
import { ReviewItem } from "../ReviewItem";
import { ItemSeparator } from "../RepositoryList/RepositoryListContainer";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository({ repositoryId: id });
  const { reviews, loadingReviews, fetchMore } = useReviews({
    first: 3,
    repositoryId: id,
  });

  if (loading && loadingReviews) return null;

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <>
      <FlatList
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <ItemSeparator />}
        ListHeaderComponent={() => (
          <>
            <RespositoryItem item={repository} gitHubButton />
            <ItemSeparator />
          </>
        )}
      />
    </>
  );
};

export default SingleRepository;
