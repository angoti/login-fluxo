import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const onGoogleLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

export const onGoogleLogout = async () => {
  return await GoogleSignin.signOut();
};

GoogleSignin.configure({
  webClientId:
    '676797397237-pjipptjgb1nuaomvcm6rd6dpt19jl06n.apps.googleusercontent.com',
});
