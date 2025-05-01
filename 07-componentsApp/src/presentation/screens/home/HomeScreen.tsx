import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../components/ui/Title';
import MenuItem from '../../components/ui/MenuItem';
import CustomView from '../../components/ui/CustomView';
// import { AirplaneIcon } from '../../icons/icons';
const animationMenuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  }
]


export const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  }
]

const HomeScreen = () => {
  return (
    <CustomView margin>
      <ScrollView>
        <Title text='mi texto' safe />
        {
          animationMenuItems.map((menuItem, index) => (
            // forma mia
            // <MenuItem name={menuItem.name} icon={menuItem.icon} component={menuItem.component} />
            <MenuItem
              key={menuItem.component}
              {...menuItem}
              isFirst={index === 0}
              isLast={index === animationMenuItems.length - 1}
            />
          ))
        }

        <View style={{ marginTop: 30 }} />
        {
          uiMenuItems.map((menuItem, index) => (
            <MenuItem
              key={menuItem.component}
              {...menuItem}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
            />
          ))
        }

        <View style={{ marginTop: 30 }} />
        {
          menuItems.map((menuItem, index) => (
            <MenuItem
              key={menuItem.component}
              {...menuItem}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))
        }


        <View style={{ marginTop: 30 }} />
      </ScrollView>
      {/* <AirplaneIcon /> */}
    </CustomView>
  );
}

const styles = StyleSheet.create({})

export default HomeScreen;
