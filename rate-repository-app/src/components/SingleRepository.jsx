import { View } from 'react-native';
import { useParams } from "react-router-native";

import RespositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';

const SingleRepository = () => {
  const { id } = useParams();
  const [repository, loading] = useRepository(id);

  if (loading) return null;
  
  return (
    <View >
      <RespositoryItem item={repository} gitHubButton />
    </View>
  )
}

export default SingleRepository;