import React from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuHardDriveDownload } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  name: string;
}

export const MeetingLink: React.FC<Props> = ({ name }) => {
  return (
    <div className="shadow-paper rounded-3xl p-3 flex items-center gap-2">
      <div className="flex-1 text-lg md:text-2xl flex gap-2.5 items-center pl-6">
        <IoDocumentTextOutline />
        {name}
      </div>
      <span className="w-10 md:w-[56px] h-10 md:h-[56px] rounded-lg md:rounded-2xl bg-info flex items-center justify-center text-white text-xl md:text-2xl">
        <LuHardDriveDownload />
      </span>
      <span className="w-10 md:w-[56px] h-10 md:h-[56px] rounded-lg md:rounded-2xl bg-info flex items-center justify-center text-white text-xl md:text-2xl">
        <FiExternalLink />
      </span>
    </div>
  )
}
