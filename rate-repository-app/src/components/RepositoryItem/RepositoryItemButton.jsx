import { Pressable, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';

import Text from '../Text';
import theme from "../../theme";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.accent,
    marginTop: 10,
    marginBottom: 6,
    borderRadius: 3,
    padding: 12,
    overflow: "hidden",
    textAlign: "center",
  }
});

const RepositoryItemButton = ({ url }) => {
  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      <Text color="textAccent" fontWeight="bold" style={styles.button}>Open in GitHub</Text>
    </Pressable>
  )
};

export default RepositoryItemButton;