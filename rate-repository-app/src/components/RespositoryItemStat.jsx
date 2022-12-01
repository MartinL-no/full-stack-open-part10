import { View } from 'react-native';
import Text from './Text';

const RepositoryItemStat = ({ name, stat }) => {
  const convertNumber = (number) => {
    // eslint-disable-next-line no-undef
    return new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
      notation: "compact",
      compactDisplay: "short",
    }).format(number)
  }

  return (
    <View>
      <Text marginBottom='wide' textAlign='center' fontSize='subheading' fontWeight='bold'>{convertNumber(stat)}</Text>
      <Text marginBottom='wide' textAlign='center' color='textSecondary'>{name}</Text>
    </View>
  );
};

export default RepositoryItemStat;