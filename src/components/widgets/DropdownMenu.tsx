import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import React, { Fragment } from "react";

type Props = {
  label: string;
  options: Array<{
    id: number;
    label: string;
    slug: string;
  }>;
  onChangeMenu: (id: number) => void;
};

export const DropdownMenu: React.FC<Props> = ({
  label,
  options,
  onChangeMenu,
}) => {
  return (
    <Menu>
      <MenuButton className="flex items-center gap-1">
        <span>{label}</span>
        <FiChevronDown />
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          transition
          anchor="bottom end"
          className="origin-top-right rounded-xl p-1 z-[2] text-sm/6 text-white bg-white shadow transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] mt-2"
        >
          {options.map((item, index) => (
            item.label !== "Header."+item.slug && <MenuItem key={index}>
              <div
                className="flex items-center gap-4 text-black p-2 cursor-pointer hover:bg-gray-100 rounded-xl"
                onClick={() => onChangeMenu(item.id)}
              >
                <span className="pr-2">{item.label}</span>
              </div>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};
