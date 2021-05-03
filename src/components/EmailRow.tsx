import { Checkbox, IconButton } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { selectMail } from "../store/index";

type Props = {
  id: string;
  to: string;
  title: string;
  subject: string;
  description: string;
  time: string;
};

const EmailRow: React.FC<Props> = (Props: Props) => {
  const router = useRouter();
  const distPatch = useDispatch();

  const clickButton = () => {
    router.push({
      pathname: "/Mail",
      query: Props,
    });
  };

  const openMain = () => {
    distPatch(
      selectMail({
        id: Props.id,
        to: Props.to,
        title: Props.title,
        subject: Props.subject,
        description: Props.description,
        time: Props.time,
      })
    );
  };

  return (
    <Link href="/Mail">
      <div
        className="flex items-center border-b h-15 cursor-pointer hover:border-t hover:shadow"
        onClick={openMain}
      >
        <div>
          <Checkbox />
          <IconButton>
            <StarBorderIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
        </div>
        <div className="pr-4">
          <h3>{Props.to}</h3>
        </div>
        <div className="flex items-center text-lg flex-1">
          <h4 className="  overflow-ellipsis">{Props.subject}</h4>
          <span className="px-2">{"  -  "}</span>
          <span className="text-gray-400 ">{Props.title}</span>
        </div>
        <div className="pr-5">{Props.time}</div>
      </div>
    </Link>
  );
};

export default EmailRow;
