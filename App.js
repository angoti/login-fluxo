import { View } from "react-native";
import { useState } from "react";
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { styles } from './src/styles/styles';

const App = () => {
  const [user, setUser] = useState(false);
  return <View style={styles.container}>{user ? <HomeScreen user={user} login={setUser} /> : <LoginScreen login={setUser} />}</View>;
};

export default App;