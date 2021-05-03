import React from "react";
import SideOptionModule from "./SidebarOption.module.css";
type Props = {
  Icon: any;
  title: string;
  number: number;
  selected: boolean;
};

const SidebarOption: React.FC<Props> = (Props: Props) => {
  return (
    <div
      className={`${
        Props.selected && "bg-gray-200"
      } + " flex items-center h-10 px-3 border cursor-pointer text-xl bg-gray-100  hover:bg-red-200 hover:text-green-400 hover:font-bold`}
    >
      <div className="p-2">{Props.Icon}</div>
      <h3 className="flex-1 ml-3 text-base hover:text-xs">{Props.title}</h3>
      <span className=" text-sm">{Props.number}</span>
    </div>
  );
};

export default SidebarOption;
1;
