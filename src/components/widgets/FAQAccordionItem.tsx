import React from 'react';
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

type Props = {
  data: {
    title: string;
  },
  onClick: () => void;
  active: boolean;
}

export const FAQAccordionItem: React.FC<Props> = ({ data, onClick, active }) => {
  return (
    <div className="shadow-paper rounded-xl sm:rounded-3xl">
      <div className="flex items-center pl-0 p-3 sm:p-3">
        <div className="text-base sm:text-2xl flex-1 px-6 sm:px-9">
          {data.title}
        </div>
        <div
          className="w-10 sm:w-14 h-10 sm:h-14 rounded-xl sm:rounded-2xl bg-info text-white flex items-center justify-center text-2xl cursor-pointer"
          onClick={onClick}
        >
          {active ? <IoChevronUpOutline className="text-sm sm:text-base" /> : <IoChevronDownOutline className="text-sm sm:text-base" />}
        </div>
      </div>

      {active && (
        <div className="px-6 p-3 sm:px-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      )}
    </div>
  )
}
