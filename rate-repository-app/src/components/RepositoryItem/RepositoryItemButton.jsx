import { Pressable } from "react-native";
import * as Linking from 'expo-linking';

import FormButton from '../FormButton'

const GitHubLinkButton = ({ url }) => {
  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      <FormButton>Open in GitHub</FormButton>
    </Pressable>
  )
};

export { GitHubLinkButton };