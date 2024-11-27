import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FiChevronDown } from "react-icons/fi";
import React from "react";

type Props = {
  label: string;
  options: Array<{
    id: number;
    label: string;
  }>;
  onChangeMenu: (id: number) => void;
}

export const DropdownMenu: React.FC<Props> = ({ label, options, onChangeMenu }) => {
  return (
    <Menu>
      <MenuButton className="flex items-center gap-0.5 gap-1">
        <span>{label}</span>
        <FiChevronDown />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="origin-top-right rounded-xl p-1 text-sm/6 text-white bg-white shadow transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] mt-2"
      >
        {options.map((item, index) => (
          <MenuItem key={index}>
            <div
              className="flex items-center gap-4 text-black p-2 cursor-pointer hover:bg-gray-100 rounded-xl"
              onClick={() => onChangeMenu(item.id)}
            >
              <span className="pr-2">{item.label}</span>
            </div>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
