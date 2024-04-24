export default function handleResponseFromAPI(promise) {
  return promise.then((response) => {
    console.log('Got a response from API');
    return { status: 200, body: response };
  }).catch(() => {
    console.log('Got a response from the API');
    return { status: 200, body: {} };
  });
}