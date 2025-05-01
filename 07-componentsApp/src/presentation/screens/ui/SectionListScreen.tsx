import React from 'react';
import { SectionList, Text, useWindowDimensions } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import Card from '../../components/ui/Card';
import { houses } from './data/data';
import SubTitle from '../../components/ui/SubTitle';
import { colors } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SectionListScreen = () => {
  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  return (
    <CustomView margin>
      <Title text='Section List' safe />
      <Card>
        <SectionList
          sections={houses}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={{ marginVertical: 2 }}>{item}</Text>}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section }) => (
            <SubTitle
              text={section.title}
              backgroundColor={section.title === 'DC Comics' ? '#0476F2' :
                section.title === 'Marvel Comics' ? '#EC1D24' :
                  section.title === 'Anime' ? '#FF6B6B' :
                    colors.cardBackground}
            />
          )}
          stickySectionHeadersEnabled
          SectionSeparatorComponent={({ leadingItem }) => {
            if (!leadingItem) return null;
            return (
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                color: colors.primary,
                marginVertical: 5,
                fontWeight: 'bold'
              }}>
                • • • • •
              </Text>
            );
          }}
          ListHeaderComponent={() => <Title text='Personajes' />}
          ListFooterComponent={() => (
            <Title text={`Total de secciones: ${houses.length}
            \nTotal de personajes: ${houses.reduce((acc, house) => acc + house.data.length, 0)}`} />
          )}
          style={{
            height: height - top - 120
          }}
        />
      </Card>

    </CustomView>
  );
}

export default SectionListScreen;
