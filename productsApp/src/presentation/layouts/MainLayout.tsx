import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import SubTitle from '../../../../07-componentsApp/src/presentation/components/ui/SubTitle';
import { Divider, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MyIcon from '../components/ui/MyIcon';

interface Props {
  title: string;
  subTitle?: string;
  rightAction?: () => void;
  rightActionIcon?: string;

  children?: React.ReactNode;
}

const MainLayout = ({
  title,
  subTitle,
  rightAction,
  rightActionIcon,
  children
}: Props) => {

  const { top } = useSafeAreaInsets();
  const { goBack, canGoBack } = useNavigation();

  const renderBackAction = () => (
    <TopNavigationAction
      icon={<MyIcon name='arrow-left-circle' />}
      onPress={goBack}
    />
  );

  const RenderRightAction = () => {
    if (!rightAction || !rightActionIcon) return <></>;

    return (
      <TopNavigationAction
        icon={<MyIcon name={rightActionIcon} />}
        onPress={rightAction}
      />
    )
  }

  return (
    <Layout style={{ flex: 1, paddingTop: top }}>
      <TopNavigation
        title={title}
        subtitle={subTitle}
        accessoryLeft={canGoBack() ? renderBackAction : undefined}
        alignment='center'
        accessoryRight={() => <RenderRightAction />}
      />
      <Divider />
      <Layout style={{ height: '100%', padding: 10 }}>
        {children}
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({})

export default MainLayout;
