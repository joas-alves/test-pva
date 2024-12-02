import { CustomInput, CustomRadioGroup, CustomSelect } from "@/components/common";
import { useTranslations } from "next-intl";

export const BookDemoForm = () => {
  const t = useTranslations('Common');

  return (
    <div className="shadow-paper rounded-3xl p-6 md:p-12 bg-white">
      <h2 className="text-2xl md:text-[32px] font-bold text-primary mb-8">{t('get_in_touch')}</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <CustomRadioGroup
            wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
            options={[t('veterinary_professional'), t('pet_owner')]}
            value="Pet Owner"
            onChange={() => {}}
          />
        </div>
        <div className="col-span-2">
          <CustomInput label={t('first_name')} placeholder={t('enter_first_name')} />
        </div>
        <div className="col-span-2">
          <CustomInput label={t('last_name')} placeholder={t('enter_last_name')} />
        </div>
        <div className="col-span-2">
          <CustomInput label={t('company_name')} placeholder={t('enter_company_name')} />
        </div>
        <div className="col-span-2">
          <CustomSelect label={t('country')} />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3">
          <CustomInput label={t('phone_number')} placeholder="+44 123 456 7890" />
          <CustomInput label={t('e-mail')} placeholder="email@example.com" />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3 pt-3 md:pt-6">
          <button className="btn primary-btn">{t('talk_to_us')}</button>
        </div>
      </div>
    </div>
  )
}
