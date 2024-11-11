import React from 'react';
import { SelectProps, Field, Label, Select } from '@headlessui/react'
import { IoChevronDown } from "react-icons/io5";
import clsx from 'clsx';

type Props = SelectProps & {
  label: string;
}

export const CustomSelect: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <Field>
      <Label className="text-sm/6 font-medium">{label}</Label>
      <div className="relative h-12 md:h-[50px]">
        <Select
          className={clsx(
            'mt-3 block w-full appearance-none rounded-xl border border-gray-200 py-1.5 px-6 h-full',
            'focus:outline-none',
            '*:text-black'
          )}
          {...rest}
        >
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <IoChevronDown
          className="group pointer-events-none absolute top-4 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </div>
    </Field>
  )
}
