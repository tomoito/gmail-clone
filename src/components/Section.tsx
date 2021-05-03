import { BorderBottom } from "@material-ui/icons";
import React from "react";
import Sectioncss from "./Section.module.css";

type Props = {
  Icon: any;
  title: string;
  color: string;
  selected: boolean;
};

const Section: React.FC<Props> = (Props: Props) => {
  // const styleGenerator = (Props: Props) => {
  //   color: `${Props.color}`;
  //   BorderBottom: Props.selected ? BorderBottom : `${Props.color}`;
  // };

  return (
    <div
      className={`${
        Sectioncss.section
      } flex-1 items-center min-w-min cursor-pointer border-0 hover:bg-gray-200 ${
        Props.selected && " bg-gray-100 border-b-4 "
      }`}
      style={{
        color: `${Props.color}`,
        borderBottomColor: Props.selected ? `${Props.color}` : "",
      }}
    >
      <p>{Props.Icon}</p>
      {Props.title}
    </div>
  );
};

export default Section;
