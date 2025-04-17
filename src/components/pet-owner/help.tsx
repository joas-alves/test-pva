import { useTranslations } from "next-intl";

const PetOwnerHelp = () => {
  const t = useTranslations("PetOwnerHealthPlan");
  return (
    <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        {t("need_immediate_help")}
      </h2>
      <p className="text-base sm:text-lg leading-relaxed">
        {t("need_immediate_help_description")}
      </p>
    </div>
  );
};

export { PetOwnerHelp };
