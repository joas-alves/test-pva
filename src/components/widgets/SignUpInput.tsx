import { useTranslations } from "next-intl";

export const SignUpInput = () => {
  const t = useTranslations('Common');

  return (
    <form className="flex items-center max-w-[410px] w-full rounded-2xl border border-gray-300 p-0.5">
      <input className="flex-1 text-sm pl-4 pr-0 sm:px-6" placeholder="Please enter your E-mail" />
      <button className="btn primary-btn min-w-[113px]">{t('signup')}</button>
    </form>
  )
}
