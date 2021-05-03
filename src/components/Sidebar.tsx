import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import { updateUser, openSendMessage, closeSendMessage } from "../store/index";

const Sidebar: React.FC = () => {
  const dispath = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const handleUpdate = () => {
    dispath(openSendMessage());
  };
  console.log(user);
  return (
    <div className="pr-8 w-72 hidden md:inline-block">
      <Button
        onClick={() => handleUpdate()}
        className="mt-5 mb-10 border rounded-full p-10 shadow"
        startIcon={<AddIcon fontSize="large" />}
      >
        作成
      </Button>
      <SidebarOption
        Icon={<InboxIcon />}
        title="受信トレイ"
        number={54}
        selected={true}
      />
      <SidebarOption
        Icon={<StarIcon />}
        title="スター付き"
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={<LabelImportantIcon />}
        title="ラベル"
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={<NearMeIcon />}
        title="送信済み"
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={<NoteIcon />}
        title="下書き"
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={<ExpandMoreIcon />}
        title="もっと見る"
        number={54}
        selected={false}
      />

      <div className="flex justify-center">
        <div>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <PersonIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
