import React from 'react';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import clsx from "clsx";

const plans = ['Startup', 'Business', 'Enterprise'];

type Props = {
  wrapperClassName?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const CustomRadioGroup: React.FC<Props> = ({ wrapperClassName, options, value, onChange }) => {
  return (
    <RadioGroup
      className={wrapperClassName}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <Field key={option} className="flex items-center gap-2">
          <Radio
            value={option}
            className="group flex size-5 items-center justify-center rounded-full border border-primary data-[checked]:bg-white"
          >
            <span className="invisible size-3 bg-primary rounded-full group-data-[checked]:visible" />
          </Radio>
          <Label className="text-sm">{option}</Label>
        </Field>
      ))}
    </RadioGroup>
  )
}
