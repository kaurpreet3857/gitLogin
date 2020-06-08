import React from 'react';
import GitHubLogin from 'react-github-login';

const onSuccess = response => {
  window.localStorage.setItem("code", response.code)
  console.log(response)
};
const onFailure = response => console.error(response);

function Login() {
  return (
    <GitHubLogin clientId="Iv1.3aa4722527011b10"
      redirectUri=''
      onSuccess={onSuccess}
      onFailure={onFailure}/>
  );
}

export default Login;
