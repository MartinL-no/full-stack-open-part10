import { Alert, Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import useDeleteReview from "../../hooks/useDeleteReview";
import useGetCurrentUser from "../../hooks/useGetCurrentUser";
import theme from "../../theme";
import FormButton from "../Button";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
  },
  deleteButton: {
    backgroundColor: theme.colors.textError,
    marginLeft: 10,
  },
});

const ReviewActions = ({ reviewId, repositoryId }) => {
  const navigate = useNavigate();
  const { refetch } = useGetCurrentUser({ first: 4, includeReviews: true });

  const { deleteReview } = useDeleteReview();

  const showAlert = () => 
  Alert.alert(
    "Delete review",
    "Are you sure you want to delete this review",
    [
      {
        text: "DELETE",
        onPress: () => {
          deleteReview(reviewId);
          refetch();
        }
      },
      {
        text: "CANCEL",
        onPress: () => console.log("CANCEL Pressed")
      }
    ]
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate(`/repositories/${repositoryId}`)}>
        <FormButton>View Respository</FormButton>
      </Pressable>
      <Pressable onPress={() => showAlert()}>
        <FormButton style={styles.deleteButton}>Delete Review</FormButton>
      </Pressable>
    </View>
  );
};

export { ReviewActions };
