// import auth from '@react-native-firebase/auth';
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const Facebook_auth = async() => {
//     try {
//         // Attempt login with permissions
//         const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        
//         if (result.isCancelled) {
//         throw 'User cancelled the login process';
//     }
    
//     // Once signed in, get the users AccesToken
//     const data = await AccessToken.getCurrentAccessToken();
    
//     if (!data) {
//         throw 'Something went wrong obtaining access token';
//     }
    
//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
//     // Sign-in the user with the credential
//     const user= auth().signInWithCredential(facebookCredential);
//     user.then((user)=>{console.log("Facebook user data is====>",user);})
//   .catch((error)=>{console.log("Something went wrong",error);});
// } catch (error) {
//     console.log("error is==>",error);
//     }
//     //console.log("hello==>",user);
}

export default Facebook_auth;