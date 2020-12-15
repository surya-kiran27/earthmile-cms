import { React, useState } from "react";
import { TextField, Container, Button } from "@material-ui/core";
import "../css/login.css";
import ReactLoading from "react-loading";

import { loginUser, useAuthState, useAuthDispatch } from "../Context";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAuthDispatch(); //get the dispatch method from the useDispatch custom hook
  const { loading, errorMessage } = useAuthState(); //read the values of loading and errorMessage from context

  const handleLogin = async (e) => {
    e.preventDefault();

    let payload = { username, password };
    try {
      let response = await loginUser(dispatch, payload);

      if (!response.super_user) return;

      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="container" maxWidth="sm">
      <div className="contain">
        <h3 style={{ fontWeight: "lighter", fontSize: "2em" }}>CMS LOGIN</h3>

        {!loading ? (
          <form className="form" noValidate>
            <TextField
              required
              helperText={errorMessage !== "" ? errorMessage : ""}
              id="username"
              label="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />

            <TextField
              required
              id="password"
              name="password"
              label="password"
              type="password"
              helperText={errorMessage !== "" ? errorMessage : ""}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              id="login"
              fullWidth
            >
              Login
            </Button>
          </form>
        ) : (
          <ReactLoading type="balls" color="red" height={"20%"} width={"20%"} />
        )}
      </div>
    </Container>
  );
}
