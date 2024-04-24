import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((values) => {
    const [photoResponse, userResponse] = values;
    if (photoResponse.status === 200 && userResponse.firstName && userResponse.lastName) {
      console.log(`${userResponse.firstName} ${userReponse.lastName}`);
    }
    else {
      console.log('Signup system offline');
    }
  })
  .catch(() => {
    console.log('Signup system offline');
  });
}