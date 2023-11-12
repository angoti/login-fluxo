import { Text, View, Button, Image } from "react-native";
import { onLogout } from '../auth/google';
import { styles } from '../styles/styles';

export const HomeScreen = ({ user, login }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    <Image
      style={{ width: 300, height: 300 }}
      source={{
        uri: user.user.photo,
      }}
    />
    <Button title="Sair" onPress={() => onLogout().then(() => login(false))} />
  </View>
);
