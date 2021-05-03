import { Button } from "@material-ui/core";
import React from "react";
import { login } from "store/userSlice";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      console.log(user);
      dispatch(
        login({
          hoge: "hoge",
          displayName: user?.displayName,
          email: user?.email,
          photoUrl: user?.photoURL,
        })
      );
    });
    // .catch((error) => alert(error.message))
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col">
        <img
          className=" h-52 object-contain"
          src="https://dime.jp/genre/files/2019/08/04-64-300x267.jpg"
        ></img>
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
