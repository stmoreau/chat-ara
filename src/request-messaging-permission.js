import { database, messaging } from './firebase';

export default function (user) {
  messaging.requestPermission()
  .then(() => messaging.getToken())
  .then((token) => {
    database.ref('users')
            .child(user.uid)
            .child('token')
            .self(token);
  })
  .catch(console.error);
}
