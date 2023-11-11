import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";

// Telas
const LoginScreen = ({ login }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  
  GoogleSignin.configure({
    webClientId: "676797397237-pjipptjgb1nuaomvcm6rd6dpt19jl06n.apps.googleusercontent.com",
  });

  async function onGoogleButtonPress() {
    setIsSigninInProgress(true);
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    try {
      const userInfo = await GoogleSignin.signIn();
      return userInfo;
    } catch (e) {
      console.error("----------------> ", e);
    }
  }

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Login</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() =>
          onGoogleButtonPress().then((user) => {
            console.log("********** ", user.user);
            login(true)
          })
        }
        disabled={isSigninInProgress}
      />
    </View>
  );
};

const HomeScreen = ({ login }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    <Button title="Sair" onPress={() => login(false)} />
  </View>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <View style={styles.container}>{isAuthenticated ? <HomeScreen login={setIsAuthenticated} /> : <LoginScreen login={setIsAuthenticated} />}</View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
