import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { useState } from "react";

// Telas
const LoginScreen = ({ login }) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Login</Text>
      <Button title="Entrar" onPress={() => login(true)} />
    </View>
  );
};

const HomeScreen = ({ login }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    <Button title="Sair" onPress={() => login(false)} />
  </View>
);

const CartScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Carrinho de compras</Text>
  </View>
);

const CatalogScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Catálogo</Text>
  </View>
);

// Navegadores
export const DrawerNavigator = ({ login }) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <View style={{ margin: 8 }}>
              <Button title="Sair" onPress={() => login(false)} />
            </View>
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Catálogo" component={CatalogScreen} />
      <Drawer.Screen name="Carrinho de compras" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <View style={styles.container}>
      {isAuthenticated ? <HomeScreen login={setIsAuthenticated} /> : <LoginScreen login={setIsAuthenticated} />}

      {/* {isAuthenticated
        ? (
            <NavigationContainer>
              <DrawerNavigator login={setIsAuthenticated} />
            </NavigationContainer>
        )
        : (
            <LoginScreen login={setIsAuthenticated} />
        )
      } */}
    </View>
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
