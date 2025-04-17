import { useTranslations } from "next-intl";

const PetOwnerIntroduction = () => {
  const t = useTranslations("PetOwnerHealthPlan");
  return (
    <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        {t("information_for_pet_owners")}
      </h2>
      <p className="text-base sm:text-lg leading-relaxed">
        {t("what_is_a_preventative_pet_health_plan_description")}
      </p>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        {t("what_is_a_preventative_pet_health_plan_description_2")}
      </p>
    </div>
  );
};

export { PetOwnerIntroduction };
