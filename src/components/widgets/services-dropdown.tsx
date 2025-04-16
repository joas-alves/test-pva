import { useServicesContext } from "@/contexts/services";
import { useRouter } from "next/router";
import { DropdownMenu } from "./DropdownMenu";
import { useTranslations } from "next-intl";

export interface ServiceDropdown {
  onChange?: () => void;
}
const ServicesDropdown = (props: ServiceDropdown) => {
  const { onChange } = props;
  const { services } = useServicesContext();
  const t = useTranslations("Header");

  const router = useRouter();
  const isEnUK = router.locale?.toLowerCase().includes("en-uk");
  const isEnUS = router.locale?.toLowerCase().includes("en-us");
  const isglobal = router.locale?.toLowerCase().includes("global");
  
  const servicesRouteMapping: Record<number, { slug: string }> = {
    1: { slug: "premier-pet-care-plan" },
    2: { slug: "training" },
    4: { slug: "post2pet" },
    5: { slug: "technology" },
  };

  const preparedServices: Array<{
    id: number;
    label: string;
  }> = services
    ?.map((item) => ({
      id: item.id,
      label: t(servicesRouteMapping[item.id].slug),
    }))
    .filter((item) => isEnUK || isEnUS || isglobal || !item.label?.match(/delivery/i));

  const onClick = (id: number) => {
    onChange?.();
    if (servicesRouteMapping?.[id]?.slug)
      return router.push(`/services/${servicesRouteMapping[id].slug}`);

    router.push(`/services`);
  };

  preparedServices.unshift({ id: Math.random(), label: t("overview") });

  return (
    <DropdownMenu
      label={t("dropdown_label")}
      options={preparedServices}
      onChangeMenu={onClick}
    />
  );
};

export { ServicesDropdown };
