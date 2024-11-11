import React from 'react';
import { Field, Input, InputProps, Label } from '@headlessui/react';
import clsx from "clsx";

type Props = InputProps & {
  label?: string;
}

export const CustomInput: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <Field>
      <Label className="text-sm/6 font-medium">{label}</Label>
      <Input
        className={clsx(
          'mt-3 block w-full rounded-xl py-1.5 px-6 border border-gray-200 h-12 md:h-[50px]',
          'focus:outline-none'
        )}
        {...rest}
      />
    </Field>
  )
}
