import { Text, View, Button, ActivityIndicator } from "react-native";
import { onLogin } from '../auth/google';
import { useState } from 'react';
import { styles } from '../styles/styles';

export const LoginScreen = ({ login }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator />}
      <Text style={styles.title}>Login</Text>
      <Button
        title="entrar"
        onPress={() => {
          setIsSigninInProgress(true);
          onLogin().then((user) => {
            console.log(user);
            login(user);
          });
        }}
      />
    </View>
  );
};
