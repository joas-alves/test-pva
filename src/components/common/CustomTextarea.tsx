import React from 'react';
import { Field, Textarea, TextareaProps, Label } from '@headlessui/react';
import clsx from "clsx";

type Props = TextareaProps & {
  label?: string;
}

export const CustomTextarea: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <Field>
      <Label className="text-sm/6 font-medium">{label}</Label>
      <Textarea
        className={clsx(
          'mt-3 block w-full rounded-xl py-3 px-6 border border-gray-200 h-[124px]',
          'focus:outline-none'
        )}
        {...rest}
      />
    </Field>
  )
}
