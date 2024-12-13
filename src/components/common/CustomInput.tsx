import React from 'react';
import { Field, Input, InputProps, Label } from '@headlessui/react';
import clsx from "clsx";

type Props = InputProps & {
  label?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export const CustomInput: React.FC<Props> = ({ ref, label, ...rest }) => {
  return (
    <Field>
      <Label className="text-sm/6 font-medium">{label}</Label>
      <Input
        ref={ref}
        id={label?.toLowerCase().replaceAll(" ", "_")}
        name={label?.toLowerCase().replaceAll(" ", "_")}
        className={clsx(
          'mt-3 block w-full rounded-xl py-1.5 px-6 border border-gray-200 h-12 md:h-[50px]',
          'focus:outline-none'
        )}
        {...rest}
      />
    </Field>
  )
}
