import { auth, googleAuthProvider } from '../firebase';
import { addUser } from './users';

export const signIn = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN'});
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
      dispatch(signedIn(user));
      dispatch(addUser(user));
    });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN'});
    auth.signOut().then(() => {
      dispatch(signedOut());
    });
  };
};

const signedIn = (user) => {
  return {
    type: 'SIGN_IN',
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid
  };
};

const signedOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};
