import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import { useRouter } from "next/router";

import { selectMail, selectOpenMain } from "../store/index";
import { useSelector } from "react-redux";

const Mail = () => {
  const router = useRouter();
  const selectedMain = useSelector(selectOpenMain);
  return (
    <div className=" h-screen w-full p-3 ">
      <Header />
      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="bg-white ">
          <div className="flex justify-between">
            <div>
              <IconButton onClick={() => router.push("/")}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton>
                <MoveToInboxIcon />
              </IconButton>
              <IconButton>
                <MailIcon />
              </IconButton>
              <IconButton>
                <AddAlarmIcon />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <AddAlarmIcon />
              </IconButton>
              <div></div>
            </div>
          </div>
          <div className=" w-screen">
            {/* MAIL BODY */}
            <div className="flex space-x-3 flex-col p-10 h-screen shadow bg-gray-100">
              <h2>{selectedMain?.subject}</h2>
              <h2>{selectedMain.subject}</h2>
              <p>{selectedMain.to}</p>
              <p>{selectedMain.title}</p>
            </div>
            <div>
              <p>Message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
