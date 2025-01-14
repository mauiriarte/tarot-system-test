import { StyleSheet, TextInput, View } from 'react-native';
import { styles } from './styles';

export const Button = ({
  Button: { id, title, state },
  onArchiveButton,
  onPinButton,
}) => {
  return (
    <View style={styles.listItem}>
      <TextInput value={title} editable={false} />
    </View>
  );
};
