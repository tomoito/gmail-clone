import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

import Header from "components/Header";
import Sidebar from "components/Sidebar";
import EmailList from "components/EmailList";
import SendMail from "components/SendMail";
import { selectSendMessageIsOpen } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "store/userSlice";
import Login from "components/Login";
import { auth } from "../../firebase";

const Home: NextPage = () => {
  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user?.displayName,
            email: user?.email,
            photoUrl: user?.photoURL,
          })
        );
      } else {
      }
    });
  }, []);
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="  h-screen w-full p-3 ">
          <Header />
          <div className="flex h-screen w-full  ">
            <Sidebar />
            <EmailList />
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </div>
  );
};

export default Home;
