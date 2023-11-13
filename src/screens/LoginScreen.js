import {
  TextInput,
  Text,
  View,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { onGoogleLogin } from '../auth/google';
import { useState } from 'react';
import { styles } from '../styles/styles';
import { registrar, signIn } from '../auth/email-pass-auth';

export const LoginScreen = ({ login }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const verificaCampos = opt => {
    if (email == '' || pass == '') Alert.alert('campos vazios');
    else if (opt === 'registrar') registrar(email, pass);
    else if (opt === 'entrar') signIn(email, pass);
  };

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator />}
      <Text style={styles.title}>Login</Text>
      <Button
        title="entrar com Google"
        onPress={() => {
          setIsSigninInProgress(true);
          onGoogleLogin().then(user => {
            console.log(user);
            login(user);
          });
        }}
      />
      <View style={styles.caixa}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="e-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={pass}
          placeholder="senha"
          keyboardType="default"
        />
        <Button
          title="entrar com e-mail e senha"
          onPress={() => {
            verificaCampos('entrar');
          }}
        />
        <View style={styles.title} />
        <Button
          title="Registrar e-mail e senha"
          onPress={() => {
            verificaCampos('registrar');
          }}
        />
      </View>
    </View>
  );
};
