import { Field, Label, Select, SelectProps } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { IoChevronDown } from 'react-icons/io5';

export type SelectOption = {
  value: string;
  label: string;
};

type Props = SelectProps & {
  label: string;
  options: SelectOption[]; // Options passed as a prop
  defaultValue?: string; // Optional default value
};

export const CustomSelect: React.FC<Props> = ({ label, options, defaultValue, ...rest }) => {
  const selectedValue = rest.value || defaultValue;

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
          {/* Default option when no value is selected */}
          {!selectedValue && (
            <option value="" disabled>
              Select an option
            </option>
          )}
          
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <IoChevronDown
          className="group pointer-events-none absolute top-4 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </div>
    </Field>
  );
};
