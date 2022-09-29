import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const Gmail_auth = async () => {

    GoogleSignin.configure({
        webClientId: '377406759720-7sipomkha2hii8urd0gnqq2mle4q92mr.apps.googleusercontent.com',
    });

    // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const user_data=auth().signInWithCredential(googleCredential);
  user_data.then((user)=>{console.log("Gmail user data is====>",user);})
  .catch((error)=>{console.log("Something went wrong",error);})
}

export default Gmail_auth;