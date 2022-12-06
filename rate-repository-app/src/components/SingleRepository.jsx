import { View } from 'react-native';
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";

import RespositoryItem from './RepositoryItem';
import { GET_REPOSITORY } from "../graphql/queries";

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) return null;
  
  return (
    <View >
      <RespositoryItem item={data.repository} gitHubButton />
    </View>
  )
}

export default SingleRepository;