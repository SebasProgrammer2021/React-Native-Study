import { StyleSheet } from 'react-native';
import { Icon, useTheme } from '@ui-kitten/components';

interface Props {
  name: string;
  color?: string;
  white?: boolean;
}

const MyIcon = ({ name, color, white = false }: Props) => {

  const theme = useTheme();

  let finalColor = color;

  if (white) {
    finalColor = '#FFFFFF';
  } else if (!finalColor) {
    finalColor = theme['text-basic-color'];
  } else {
    finalColor = theme[finalColor] || finalColor;
  }

  return <Icon style={[styles.icon, { tintColor: finalColor }]} fill={finalColor} name={name} />;
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32
  }
})

export default MyIcon;
