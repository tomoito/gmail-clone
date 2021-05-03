import { Checkbox, IconButton } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";

import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import Section from "components/Section";
import EmailRow from "components/EmailRow";
import { db } from "../../firebase";
const EmailList: React.FC = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot: any) =>
        setEmails(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: {
              to: doc.data().to,
              subject: doc.data().subject,
              message: doc.data().message,
            },
          }))
        )
      );
  }, []);

  return (
    <div className="flex-1 h-full  overflow-scroll w-screen">
      <div className="flex justify-between sticky top-0 z-50">
        <div>
          <Checkbox />
          <IconButton>
            <ArrowDownwardIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>
      <div className="sticky top-0 flex border-b">
        <Section
          Icon={<InboxIcon />}
          title={"メイン"}
          color="black"
          selected={true}
        />
        <Section
          Icon={<PeopleIcon />}
          title={"ソーシャル"}
          color="blue"
          selected={false}
        />
        <Section
          Icon={<LocalOfferIcon />}
          title={"プロモーション"}
          color="red"
          selected={true}
        />
      </div>

      <div className="">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            to={to}
            title={message}
            subject={subject}
            time={timestamp}
            description="desp"
          ></EmailRow>
        ))}
      </div>
    </div>
  );
};

export default EmailList;
