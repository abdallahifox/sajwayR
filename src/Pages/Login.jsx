import React from "react";

//TODO: Import React Components

import HeroBanner from "./../Components/HeroBanner/HeroBanner";
import LoginFrom from "./../Components/AuthComponents/LoginFrom";

function Login() {
  return (
    <div>
      <HeroBanner title="Login" />
      <LoginFrom />
    </div>
  );
}

export default Login;
