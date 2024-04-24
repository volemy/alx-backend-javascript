export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ firstName, lastName });
    }, 1000);
  });
}