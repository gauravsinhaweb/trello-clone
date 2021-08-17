import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Body, Button } from "../styles/LoginStyle";

function LoginUi() {
  const history = useHistory();
  const [loginwWithGoogle] = useAuth();

  const LoginHandler = async () => {
    await loginwWithGoogle();

    history.push("/board");
  };

  return (
    <>
      <Body>
        <Button onClick={LoginHandler}>Sign in with Google</Button>
      </Body>
    </>
  );
}

export default LoginUi;
