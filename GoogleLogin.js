const responseGoogle = response => {
    console.log(response);
}

<GoogleLogin
    clientId = "440576879348-bmhjqcgph4ituumml6qmn40pnfv6k38a.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy="single_host_origin"
/>