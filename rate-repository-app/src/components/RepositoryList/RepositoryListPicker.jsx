import { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';

const RepositoryListPicker = ({ buttonLabel, setButtonLabel, setOrderBy, setOrderDirection }) => {
  const [visible, setVisible] = useState(false);
  const options = {
    latest: {
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC',
      label: 'Latest repositories',
    },
    highest: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
      label: 'Highest rated repositories',
    },
    lowest: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
      label: 'Lowest rated repositories',
    },
  }

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleMenuPress = (option) => {
    setOrderBy(option.orderBy);
    setOrderDirection(option.orderDirection);
    setButtonLabel(option.label);
    closeMenu();
  }

  return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button onPress={openMenu}>{buttonLabel}</Button>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={{ x: 78, y: 235 } }
        >
          <Menu.Item disabled title="Select an item.." />
            <Menu.Item onPress={() => {handleMenuPress(options.latest)}} title={options.latest.label} />
            <Menu.Item onPress={() => {handleMenuPress(options.highest)}} title={options.highest.label} />
            <Menu.Item onPress={() => {handleMenuPress(options.lowest)}} title={options.lowest.label} />
        </Menu>
      </View>
  );
};

export { RepositoryListPicker };