import { CustomInput, CustomRadioGroup, CustomSelect, CustomTextarea } from "@/components/common";
import { useTranslations } from "next-intl";

export const ContactUsForm = () => {
  const t = useTranslations('Common');

  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-3">
      <div className="col-span-2">
        <CustomRadioGroup
          wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
          options={[t('veterinary_professional'), t('pet_owner')]}
          value="Pet Owner"
          onChange={() => {}}
        />
      </div>
      <CustomInput label={t('first_name')} placeholder={t('enter_first_name')} />
      <CustomInput label={t('last_name')} placeholder={t('enter_last_name')} />
      <CustomInput label={t('phone_number')} placeholder="+44 123 456 7890" />
      <CustomInput label="E-mail" placeholder="email@example.com" />
      <div className="col-span-2">
        <CustomSelect label={t('topic_of_your_request')} />
      </div>
      <div className="col-span-2">
        <CustomTextarea label={t('your_message')} placeholder={t('enter_your_message')} />
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-3 pt-3 md:pt-6">
        <button className="btn primary-btn">{t('get_in_touch')}</button>
      </div>
    </div>
  )
}
