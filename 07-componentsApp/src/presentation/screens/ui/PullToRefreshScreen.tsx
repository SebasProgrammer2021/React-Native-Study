import React, { useContext, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const { colors } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 4000);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[colors.primary, "red", "orange", "green"]}
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={top}
          progressBackgroundColor={colors.cardBackground}
        />
      }
      style={[
        globalStyles.globalMargin,
        globalStyles.mainContainer
      ]}
    >
      <Title text='Pull to refresh' safe />
    </ScrollView>
  );
}

export default PullToRefreshScreen;
