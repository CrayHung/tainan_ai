const getServerUrl = () => {
  const myUrl = window.location.href;
  const { hostname } = new URL(myUrl);
  // "http://localhost:9098";
  const serverUrl = "http://" + hostname + ":9098";
  return serverUrl;
}

export const serverUrl = getServerUrl();